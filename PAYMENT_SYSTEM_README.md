# Payment System Documentation

## Overview
The Jolimont Electronics payment system supports two payment methods:
- **Stripe**: Credit/Debit card payments
- **PayPal**: PayPal account payments

Both payment methods are fully integrated with secure transaction processing, webhooks, and refund capabilities.

---

## Setup Instructions

### 1. Environment Variables

Add the following to your `.env` file:

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# PayPal Configuration
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
PAYPAL_MODE=sandbox  # Use 'live' for production
```

### 2. Get API Keys

#### Stripe:
1. Go to [https://dashboard.stripe.com/register](https://dashboard.stripe.com/register)
2. Create an account
3. Go to Developers > API keys
4. Copy the **Publishable key** (STRIPE_PUBLIC_KEY) and **Secret key** (STRIPE_SECRET_KEY)
5. For webhooks:
   - Go to Developers > Webhooks
   - Add endpoint: `https://yourdomain.com/api/webhooks/stripe/`
   - Select events: `payment_intent.succeeded`, `payment_intent.payment_failed`
   - Copy the **Signing secret** (STRIPE_WEBHOOK_SECRET)

#### PayPal:
1. Go to [https://developer.paypal.com](https://developer.paypal.com)
2. Create an account and log in
3. Go to Dashboard > My Apps & Credentials
4. Create a new app
5. Copy the **Client ID** and **Secret**
6. For testing, use sandbox mode

### 3. Run Migrations

```bash
cd backend
python manage.py makemigrations
python manage.py migrate
```

---

## API Endpoints

### Base URL: `/api/`

### Stripe Payment Flow

#### 1. Create Payment Intent
**Endpoint:** `POST /api/payments/stripe/create-intent/`

**Request:**
```json
{
  "order_id": 123
}
```

**Response:**
```json
{
  "clientSecret": "pi_xxx_secret_xxx",
  "paymentIntentId": "pi_xxx",
  "publicKey": "pk_test_xxx",
  "payment_id": 1
}
```

#### 2. Confirm Payment
**Endpoint:** `POST /api/payments/stripe/confirm/`

**Request:**
```json
{
  "payment_intent_id": "pi_xxx",
  "order_id": 123
}
```

**Response:**
```json
{
  "message": "Payment confirmed successfully",
  "order_number": "JE-ABC12345",
  "payment_id": 1
}
```

### PayPal Payment Flow

#### 1. Create PayPal Order
**Endpoint:** `POST /api/payments/paypal/create-order/`

**Request:**
```json
{
  "order_id": 123
}
```

**Response:**
```json
{
  "paypalOrderId": "xxx",
  "approvalUrl": "https://www.paypal.com/checkoutnow?token=xxx",
  "payment_id": 1
}
```

#### 2. Capture Payment
**Endpoint:** `POST /api/payments/paypal/capture/`

**Request:**
```json
{
  "paypal_order_id": "xxx",
  "order_id": 123
}
```

**Response:**
```json
{
  "message": "Payment captured successfully",
  "order_number": "JE-ABC12345",
  "payment_id": 1
}
```

### Refund Payment

**Endpoint:** `POST /api/payments/{payment_id}/refund/`

**Request:**
```json
{
  "amount": 50.00,
  "reason": "Customer requested refund"
}
```

**Response:**
```json
{
  "message": "Refund processed successfully",
  "refund_id": "re_xxx"
}
```

### List Payments

**Endpoint:** `GET /api/payments/`

**Response:**
```json
[
  {
    "id": 1,
    "order": 123,
    "order_number": "JE-ABC12345",
    "payment_method": "stripe",
    "amount": "99.99",
    "currency": "eur",
    "status": "completed",
    "transaction_id": "STRIPE-pi_xxx",
    "card_last4": "4242",
    "card_brand": "visa",
    "created_at": "2026-02-16T00:30:00Z",
    "completed_at": "2026-02-16T00:35:00Z"
  }
]
```

---

## Frontend Integration

### Stripe Example (React with Stripe Elements)

```tsx
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { productsAPI } from './services/api';

const stripePromise = loadStripe('pk_test_your_stripe_public_key');

function CheckoutForm({ orderId }) {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Create payment intent
    fetch('/api/payments/stripe/create-intent/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ order_id: orderId })
    })
    .then(res => res.json())
    .then(data => setClientSecret(data.clientSecret));
  }, [orderId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      }
    });

    if (error) {
      console.error(error);
    } else if (paymentIntent.status === 'succeeded') {
      // Confirm with backend
      await fetch('/api/payments/stripe/confirm/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          payment_intent_id: paymentIntent.id,
          order_id: orderId
        })
      });
      
      // Redirect to success page
      window.location.href = '/order/success';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>Pay Now</button>
    </form>
  );
}

function App() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm orderId={123} />
    </Elements>
  );
}
```

### PayPal Example (React with PayPal SDK)

````tsx
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PayPalCheckout({ orderId }) {
  const [paypalOrderId, setPaypalOrderId] = useState('');

  const createOrder = async () => {
    const response = await fetch('/api/payments/paypal/create-order/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ order_id: orderId })
    });
    
    const data = await response.json();
    setPaypalOrderId(data.paypalOrderId);
    return data.paypalOrderId;
  };

  const onApprove = async (data) => {
    const response = await fetch('/api/payments/paypal/capture/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        paypal_order_id: data.orderID,
        order_id: orderId
      })
    });
    
    if (response.ok) {
      window.location.href = '/order/success';
    }
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "your-paypal-client-id" }}>
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </PayPalScriptProvider>
  );
}
````

---

## Security Features

### 1. **Stripe Security**
- Payment intents prevent man-in-the-middle attacks
- 3D Secure (SCA) compliance built-in
- PCI-compliant tokenization
- Webhook signature verification

### 2. **PayPal Security**
- OAuth 2.0 authentication
- Encrypted API communication
- Buyer/seller protection
- Fraud detection

### 3. **Backend Security**
- User authentication required for all payment operations
- Order ownership verification
- CSRF protection
- Transaction ID uniqueness
- Payment status validation
- Amount verification

### 4. **Payment State Management**
- Idempotent payment creation (prevents duplicate charges)
- Status tracking (pending → processing → completed)
- Automatic order status updates
- Refund tracking

---

## Webhook Configuration

### Stripe Webhooks

Stripe sends webhooks to notify your backend about payment events.

**Endpoint:** `POST /api/webhooks/stripe/`

**Events Handled:**
- `payment_intent.succeeded`: Updates payment and order status to completed
- `payment_intent.payment_failed`: Updates payment status to failed

**Setup:**
1. Go to Stripe Dashboard > Developers > Webhooks
2. Add endpoint: `https://yourdomain.com/api/webhooks/stripe/`
3. Select events to listen for
4. Copy webhook signing secret to `.env`

**Testing Webhooks Locally:**
```bash
# Install Stripe CLI
stripe listen --forward-to localhost:8000/api/webhooks/stripe/

# Trigger test events
stripe trigger payment_intent.succeeded
```

---

## Payment Models

### Payment Model
```python
class Payment(models.Model):
    order = ForeignKey(Order)
    user = ForeignKey(User)
    payment_method = CharField()  # 'stripe', 'paypal', 'card'
    amount = DecimalField()
    currency = CharField()  # 'eur', 'usd', etc.
    status = CharField()  # 'pending', 'processing', 'completed', 'failed', 'refunded'
    transaction_id = CharField()  # Unique transaction ID
    stripe_payment_intent_id = CharField()
    paypal_order_id = CharField()
    card_last4 = CharField()
    card_brand = CharField()
    metadata = JSONField()
    error_message = TextField()
    created_at = DateTimeField()
    completed_at = DateTimeField()
```

### PaymentRefund Model
```python
class PaymentRefund(models.Model):
    payment = ForeignKey(Payment)
    amount = DecimalField()
    reason = TextField()
    status = CharField()  # 'pending', 'processing', 'completed', 'failed'
    refund_id = CharField()
    stripe_refund_id = CharField()
    paypal_refund_id = CharField()
    created_at = DateTimeField()
    completed_at = DateTimeField()
```

---

## Testing

### Test Cards (Stripe)

| Card Number | Description |
|------------|-------------|
| 4242 4242 4242 4242 | Successful payment |
| 4000 0000 0000 0002 | Payment declined |
| 4000 0000 0000 9995 | Payment requires authentication |

**Use:**
- Any future expiry date (e.g., 12/34)
- Any 3-digit CVC
- Any postal code

### PayPal Sandbox

Use PayPal sandbox accounts for testing:
1. Go to [Developer Dashboard](https://developer.paypal.com/dashboard/)
2. Create sandbox accounts (buyer and seller)
3. Use sandbox credentials in your app
4. Test payments with sandbox accounts

---

## Error Handling

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| "Order does not belong to you" | User trying to pay for someone else's order | Verify order ownership |
| "Order is already paid" | Duplicate payment attempt | Check order payment_status |
| "Payment not completed" | Payment intent not succeeded | Check Stripe dashboard or PayPal logs |
| "OPENAI_API_KEY not configured" | Missing API key | Add to .env file |
| "Payment record not found" | Invalid payment ID | Verify payment exists |

---

## Production Checklist

- [ ] Set `DEBUG=False` in settings.py
- [ ] Use production Stripe keys (start with `pk_live_` and `sk_live_`)
- [ ] Set `PAYPAL_MODE=live` in .env
- [ ] Configure production PayPal app
- [ ] Set up Stripe webhooks with production URL
- [ ] Enable HTTPS/SSL certificate
- [ ] Configure proper CORS settings
- [ ] Set up monitoring and logging
- [ ] Test refund process
- [ ] Configure email notifications for payments
- [ ] Set up backup payment method
- [ ] Review PCI compliance requirements

---

## Support

For issues or questions:
- **Stripe Documentation:** [https://stripe.com/docs](https://stripe.com/docs)
- **PayPal Documentation:** [https://developer.paypal.com/docs](https://developer.paypal.com/docs)
- **Django Rest Framework:** [https://www.django-rest-framework.org](https://www.django-rest-framework.org)

---

## License

This payment system implementation is part of the Jolimont Electronics e-commerce platform.
