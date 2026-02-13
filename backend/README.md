# Jolimont Electronics Backend

Django REST API backend for the Jolimont Electronics e-commerce platform.

## Project Structure

```
backend/
├── jolimont_electronics/    # Main project configuration
│   ├── settings.py          # Django settings
│   ├── urls.py              # URL routing
│   ├── wsgi.py              # WSGI application
│   └── asgi.py              # ASGI application
├── users/                   # User authentication & profiles
│   ├── models.py            # User and UserProfile models
│   ├── serializers.py       # User serializers
│   ├── views.py             # Authentication views
│   └── urls.py              # User endpoints
├── products/                # Product catalog management
│   ├── models.py            # Product, Brand, Category models
│   ├── serializers.py       # Product serializers
│   ├── views.py             # Product views
│   └── urls.py              # Product endpoints
├── orders/                  # Order & cart management
│   ├── models.py            # Order, Cart models
│   ├── serializers.py       # Order serializers
│   ├── views.py             # Order & cart views
│   └── urls.py              # Order endpoints
├── customer_service/        # Customer service features
│   ├── models.py            # Contact, Chat, Diagnostic models
│   ├── serializers.py       # Customer service serializers
│   ├── views.py             # Customer service views
│   └── urls.py              # Customer service endpoints
├── content/                 # Blog, FAQ, static pages
│   ├── models.py            # BlogArticle, FAQ, Page models
│   ├── serializers.py       # Content serializers
│   ├── views.py             # Content views
│   └── urls.py              # Content endpoints
├── api/                     # API utilities
├── manage.py                # Django management script
├── requirements.txt         # Python dependencies
└── .env.example             # Environment variables template
```

## Features

### User Management
- User registration and authentication (JWT with Knox)
- User profiles with preferences
- Password change functionality
- Newsletter subscription

### Product Catalog
- Products with multiple images
- Brands and categories
- Product specifications and compatibility
- Product reviews and ratings
- Search and filtering
- AI-powered search
- Featured products, bestsellers, new arrivals

### Shopping & Orders
- Shopping cart (session-based and user-based)
- Order management
- Multiple delivery options
- Order tracking
- Order cancellation

### Customer Service
- Contact form
- Chatbot functionality
- DIY diagnostic tool

### Content Management
- Blog articles
- FAQ management
- Static pages (warranty, returns, terms, etc.)

## Setup

### Prerequisites
- Python 3.10+
- pip
- virtualenv (recommended)

### Installation

1. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   # Windows
   venv\Scripts\activate
   # Linux/Mac
   source venv/bin/activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Configure environment variables:
   ```bash
   copy .env.example .env
   # Edit .env with your configuration
   ```

4. Run migrations:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. Create a superuser:
   ```bash
   python manage.py createsuperuser
   ```

6. Load initial data (optional):
   ```bash
   python manage.py loaddata initial_data.json
   ```

7. Run the development server:
   ```bash
   python manage.py runserver
   ```

The API will be available at `http://localhost:8000`

## API Documentation

Interactive API documentation is available at:
- Swagger UI: `http://localhost:8000/api/docs/`
- ReDoc: `http://localhost:8000/api/redoc/`
- OpenAPI Schema: `http://localhost:8000/api/schema/`

## API Endpoints

### Authentication
- `POST /api/auth/register/` - Register new user
- `POST /api/auth/login/` - Login
- `POST /api/auth/logout/` - Logout
- `GET /api/auth/user/` - Get current user
- `PUT /api/auth/user/` - Update user profile
- `POST /api/auth/change-password/` - Change password

### Products
- `GET /api/products/` - List products
- `GET /api/products/{slug}/` - Get product detail
- `GET /api/products/featured/` - Get featured products
- `GET /api/products/bestsellers/` - Get bestsellers
- `GET /api/products/new_arrivals/` - Get new arrivals
- `POST /api/products/ai_search/` - AI-powered search
- `POST /api/products/search_by_model/` - Search by appliance model
- `POST /api/products/{slug}/add_review/` - Add product review

### Brands
- `GET /api/products/brands/` - List brands
- `GET /api/products/brands/{slug}/` - Get brand detail
- `GET /api/products/brands/{slug}/products/` - Get brand products

### Categories
- `GET /api/products/categories/` - List categories
- `GET /api/products/categories/{slug}/` - Get category detail
- `GET /api/products/categories/{slug}/products/` - Get category products

### Cart
- `GET /api/orders/cart/` - Get current cart
- `POST /api/orders/cart/add_item/` - Add item to cart
- `POST /api/orders/cart/update_item/` - Update cart item
- `POST /api/orders/cart/remove_item/` - Remove item from cart
- `POST /api/orders/cart/clear/` - Clear cart

### Orders
- `GET /api/orders/orders/` - List user orders
- `POST /api/orders/orders/` - Create order
- `GET /api/orders/orders/{id}/` - Get order detail
- `GET /api/orders/orders/{id}/track/` - Track order
- `POST /api/orders/orders/{id}/cancel/` - Cancel order

### Customer Service
- `POST /api/customer-service/contact/` - Submit contact form
- `POST /api/customer-service/chatbot/send_message/` - Send chatbot message
- `GET /api/customer-service/chatbot/get_conversation/` - Get chat history
- `POST /api/customer-service/diagnostic/` - Submit diagnostic

### Content
- `GET /api/content/blog/` - List blog articles
- `GET /api/content/blog/{slug}/` - Get blog article
- `GET /api/content/blog/latest/` - Get latest articles
- `GET /api/content/faq/` - List FAQs
- `GET /api/content/faq/by_category/` - Get FAQs by category
- `GET /api/content/pages/{page_type}/` - Get static page
- `POST /api/content/newsletter/subscribe/` - Subscribe to newsletter
- `POST /api/content/newsletter/unsubscribe/` - Unsubscribe

## Admin Panel

Access the Django admin panel at: `http://localhost:8000/admin/`

## Testing

Run tests:
```bash
python manage.py test
```

## Deployment

For production deployment:

1. Set `DEBUG=False` in `.env`
2. Configure a production database (PostgreSQL recommended)
3. Set up a proper SECRET_KEY
4. Configure ALLOWED_HOSTS
5. Set up static file serving
6. Use a production WSGI server (Gunicorn, uWSGI)
7. Set up HTTPS
8. Configure email backend
9. Set up Celery for background tasks (optional)

## Technologies

- Django 5.1
- Django REST Framework 3.15
- Django Knox (JWT authentication)
- Django CORS Headers
- Django Filters
- PostgreSQL/SQLite
- Pillow (image handling)
- drf-spectacular (API documentation)

## License

Proprietary - All rights reserved
