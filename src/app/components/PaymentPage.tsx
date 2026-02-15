import React, { useState, useEffect } from 'react';
import { loadStripe, Stripe, StripeElements } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { paymentAPI, Order } from '../services/api';

// Initialize Stripe (replace with your actual publishable key)
const stripePromise = loadStripe('pk_test_your_stripe_public_key');

interface CheckoutProps {
  order: Order;
  onSuccess: () => void;
  onError: (error: string) => void;
}

/**
 * Stripe Payment Component
 */
function StripeCheckoutForm({ order, onSuccess, onError }: CheckoutProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    // Create payment intent when component mounts
    const createPaymentIntent = async () => {
      try {
        setLoading(true);
        const response = await paymentAPI.stripe.createIntent(order.id);
        setClientSecret(response.data.clientSecret);
      } catch (error: any) {
        onError(error.response?.data?.error || 'Failed to initialize payment');
      } finally {
        setLoading(false);
      }
    };

    createPaymentIntent();
  }, [order.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    setProcessing(true);

    try {
      // Confirm card payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      if (paymentIntent.status === 'succeeded') {
        // Confirm with backend
        await paymentAPI.stripe.confirmPayment(paymentIntent.id, order.id);
        onSuccess();
      }
    } catch (error: any) {
      onError(error.message || 'Payment failed');
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
    return <div className="text-center py-4">Loading payment form...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="border rounded-lg p-4 bg-gray-50">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>
      
      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {processing ? 'Processing...' : `Pay €${order.total}`}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Secure payment powered by Stripe
      </p>
    </form>
  );
}

/**
 * PayPal Payment Component
 */
function PayPalCheckout({ order, onSuccess, onError }: CheckoutProps) {
  const [paypalClientId, setPaypalClientId] = useState('');

  useEffect(() => {
    // In production, you should get this from your environment variables
    setPaypalClientId('your-paypal-client-id');
  }, []);

  const createOrder = async () => {
    try {
      const response = await paymentAPI.paypal.createOrder(order.id);
      return response.data.paypalOrderId;
    } catch (error: any) {
      onError(error.response?.data?.error || 'Failed to create PayPal order');
      throw error;
    }
  };

  const onApprove = async (data: any) => {
    try {
      await paymentAPI.paypal.capturePayment(data.orderID, order.id);
      onSuccess();
    } catch (error: any) {
      onError(error.response?.data?.error || 'Failed to capture payment');
    }
  };

  if (!paypalClientId) {
    return <div className="text-center py-4">Loading PayPal...</div>;
  }

  return (
    <PayPalScriptProvider options={{ 
      "client-id": paypalClientId,
      currency: "EUR"
    }}>
      <div className="space-y-4">
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          onError={(err) => {
            onError('PayPal payment failed');
            console.error('PayPal error:', err);
          }}
          style={{
            layout: 'vertical',
            color: 'gold',
            shape: 'rect',
            label: 'paypal',
          }}
        />
        
        <p className="text-xs text-gray-500 text-center">
          Secure payment powered by PayPal
        </p>
      </div>
    </PayPalScriptProvider>
  );
}

/**
 * Main Payment Selection Component
 */
interface PaymentPageProps {
  order: Order;
  onPaymentSuccess: () => void;
}

export default function PaymentPage({ order, onPaymentSuccess }: PaymentPageProps) {
  const [selectedMethod, setSelectedMethod] = useState<'stripe' | 'paypal'>('stripe');
  const [error, setError] = useState('');

  const handleSuccess = () => {
    // Clear any errors
    setError('');
    // Redirect to success page or show success message
    onPaymentSuccess();
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    // Show error toast or notification
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Complete Your Payment</h1>

      {/* Order Summary */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Order Number:</span>
            <span className="font-medium">{order.order_number}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Status:</span>
            <span className="font-medium">{order.status}</span>
          </div>
          <div className="flex justify-between text-lg font-bold pt-2 border-t">
            <span>Total:</span>
            <span>€{order.total}</span>
          </div>
        </div>
      </div>

      {/* Payment Method Selection */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setSelectedMethod('stripe')}
            className={`p-4 border-2 rounded-lg transition-colors ${
              selectedMethod === 'stripe'
                ? 'border-primary bg-primary-light'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <div className="text-center">
              <div className="text-lg font-semibold mb-1">Credit Card</div>
              <div className="text-sm text-gray-600">Visa, Mastercard, etc.</div>
            </div>
          </button>

          <button
            onClick={() => setSelectedMethod('paypal')}
            className={`p-4 border-2 rounded-lg transition-colors ${
              selectedMethod === 'paypal'
                ? 'border-primary bg-primary-light'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <div className="text-center">
              <div className="text-lg font-semibold mb-1">PayPal</div>
              <div className="text-sm text-gray-600">Pay with PayPal</div>
            </div>
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {/* Payment Form */}
        {selectedMethod === 'stripe' ? (
          <Elements stripe={stripePromise}>
            <StripeCheckoutForm
              order={order}
              onSuccess={handleSuccess}
              onError={handleError}
            />
          </Elements>
        ) : (
          <PayPalCheckout
            order={order}
            onSuccess={handleSuccess}
            onError={handleError}
          />
        )}
      </div>

      {/* Security Notice */}
      <div className="text-center text-sm text-gray-600">
        <p className="mb-2">🔒 Your payment information is encrypted and secure</p>
        <p>We never store your card details on our servers</p>
      </div>
    </div>
  );
}

/**
 * Example Usage:
 * 
 * import PaymentPage from './components/PaymentPage';
 * import { ordersAPI } from './services/api';
 * 
 * function CheckoutPage() {
 *   const [order, setOrder] = useState(null);
 * 
 *   useEffect(() => {
 *     // Get order details
 *     ordersAPI.get(orderId).then(response => {
 *       setOrder(response.data);
 *     });
 *   }, [orderId]);
 * 
 *   const handlePaymentSuccess = () => {
 *     // Redirect to success page
 *     navigate('/order/success');
 *   };
 * 
 *   if (!order) return <div>Loading...</div>;
 * 
 *   return (
 *     <PaymentPage 
 *       order={order} 
 *       onPaymentSuccess={handlePaymentSuccess}
 *     />
 *   );
 * }
 */
