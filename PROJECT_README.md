# Jolimont Electronics - Full Stack E-Commerce Platform

A comprehensive e-commerce platform for appliance parts and repair services, built with Django REST Framework backend and React + TypeScript frontend.

## Project Structure

```
Premium E-commerce Site Design (2)/
├── backend/                      # Django REST API Backend
│   ├── jolimont_electronics/     # Main Django project
│   ├── users/                    # User authentication & profiles
│   ├── products/                 # Product catalog management
│   ├── orders/                   # Order & cart management
│   ├── customer_service/         # Customer service features
│   ├── content/                  # Blog, FAQ, static pages
│   ├── api/                      # API utilities
│   ├── manage.py                 # Django management
│   ├── requirements.txt          # Python dependencies
│   ├── setup.bat                 # Windows setup script
│   ├── setup.sh                  # Unix/Mac setup script
│   └── README.md                 # Backend documentation
│
├── src/                          # React Frontend
│   ├── app/                      # Main application
│   │   ├── App.tsx               # Root component
│   │   ├── components/           # React components
│   │   ├── contexts/             # React contexts
│   │   └── translations.ts       # i18n translations
│   ├── services/                 # API services
│   │   └── api.ts                # API client
│   ├── assets/                   # Images, fonts
│   ├── styles/                   # CSS files
│   └── main.tsx                  # Entry point
│
├── html-version/                 # Static HTML version
├── guidelines/                   # Project guidelines
├── package.json                  # Node dependencies
├── vite.config.ts                # Vite configuration
└── README.md                     # This file
```

## Technology Stack

### Backend
- **Django 5.1** - Python web framework
- **Django REST Framework 3.15** - REST API toolkit
- **Django Knox** - Token-based authentication
- **Django CORS Headers** - CORS support
- **PostgreSQL/SQLite** - Database
- **Pillow** - Image processing
- **Celery** - Task queue (optional)
- **Redis** - Cache and message broker
- **Stripe** - Payment processing

### Frontend
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **Axios** - HTTP client
- **React Slick** - Carousel
- **Lucide React** - Icons
- **Sonner** - Toast notifications

## Features

### 🛍️ E-Commerce Core
- Product catalog with advanced filtering
- Brand and category browsing
- Shopping cart (session and user-based)
- Multi-step checkout process
- Multiple payment methods
- Order management and tracking
- Product reviews and ratings

### 🔍 Smart Features
- AI-powered product search
- Appliance model compatibility search
- DIY diagnostic tool
- Interactive chatbot
- Barcode scanner

### 👤 User Management
- User registration and authentication
- User profiles
- Order history
- Newsletter subscription
- Multi-language support (EN, FR, DE, ES)

### 📝 Content
- Blog articles
- FAQ system
- Warranty information
- Returns policy
- Terms & conditions
- Customer service contact form

### 📦 Delivery Options
- Express delivery
- Standard delivery
- Relay point pickup
- Eco delivery
- Free shipping over €50

## Getting Started

### Prerequisites
- **Backend:** Python 3.10+, pip
- **Frontend:** Node.js 18+, npm/yarn
- **Database:** PostgreSQL (recommended) or SQLite
- **Optional:** Redis for caching

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Run the setup script:
   
   **Windows:**
   ```bash
   setup.bat
   ```
   
   **Unix/Mac:**
   ```bash
   chmod +x setup.sh
   ./setup.sh
   ```

3. Or manually:
   ```bash
   # Create virtual environment
   python -m venv venv
   
   # Activate it
   # Windows: venv\Scripts\activate
   # Unix/Mac: source venv/bin/activate
   
   # Install dependencies
   pip install -r requirements.txt
   
   # Copy environment file
   cp .env.example .env
   # Edit .env with your settings
   
   # Run migrations
   python manage.py makemigrations
   python manage.py migrate
   
   # Create superuser
   python manage.py createsuperuser
   
   # Start server
   python manage.py runserver
   ```

4. Access:
   - API: http://localhost:8000/api/
   - Admin: http://localhost:8000/admin/
   - Docs: http://localhost:8000/api/docs/

### Frontend Setup

1. Navigate to project root:
   ```bash
   cd ..
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment:
   ```bash
   cp .env.example .env
   # Edit .env if needed
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

5. Access: http://localhost:5173

## API Endpoints

### Authentication
```
POST   /api/auth/register/           Register new user
POST   /api/auth/login/              Login
POST   /api/auth/logout/             Logout
GET    /api/auth/user/               Get current user
PUT    /api/auth/user/               Update user
POST   /api/auth/change-password/    Change password
```

### Products
```
GET    /api/products/                List products
GET    /api/products/{slug}/         Get product detail
GET    /api/products/featured/       Featured products
GET    /api/products/bestsellers/    Best sellers
GET    /api/products/new_arrivals/   New arrivals
POST   /api/products/ai_search/      AI search
POST   /api/products/search_by_model/ Search by model
POST   /api/products/{slug}/add_review/ Add review
```

### Cart & Orders
```
GET    /api/orders/cart/             Get cart
POST   /api/orders/cart/add_item/    Add to cart
POST   /api/orders/cart/update_item/ Update quantity
POST   /api/orders/cart/remove_item/ Remove item
POST   /api/orders/cart/clear/       Clear cart

GET    /api/orders/orders/           List orders
POST   /api/orders/orders/           Create order
GET    /api/orders/orders/{id}/      Get order
GET    /api/orders/orders/{id}/track/ Track order
POST   /api/orders/orders/{id}/cancel/ Cancel order
```

### Customer Service
```
POST   /api/customer-service/contact/           Submit contact form
POST   /api/customer-service/chatbot/send_message/ Send message
GET    /api/customer-service/chatbot/get_conversation/ Get history
POST   /api/customer-service/diagnostic/       Submit diagnostic
```

### Content
```
GET    /api/content/blog/                      List articles
GET    /api/content/blog/{slug}/               Get article
GET    /api/content/faq/                       List FAQs
GET    /api/content/pages/{type}/              Get page
POST   /api/content/newsletter/subscribe/      Subscribe
POST   /api/content/newsletter/unsubscribe/    Unsubscribe
```

## Development

### Backend Development
```bash
cd backend

# Run migrations after model changes
python manage.py makemigrations
python manage.py migrate

# Create new app
python manage.py startapp app_name

# Run tests
python manage.py test

# Collect static files
python manage.py collectstatic
```

### Frontend Development
```bash
# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run typecheck

# Linting
npm run lint
```

## Deployment

### Backend Deployment

1. Set environment variables:
   ```
   DEBUG=False
   SECRET_KEY=<secure-random-key>
   ALLOWED_HOSTS=yourdomain.com
   DATABASE_URL=postgresql://...
   ```

2. Configure production database
3. Set up static file serving
4. Use production WSGI server (Gunicorn, uWSGI)
5. Set up HTTPS
6. Configure email backend
7. Set up Celery workers (optional)

### Frontend Deployment

1. Build for production:
   ```bash
   npm run build
   ```

2. Deploy `dist/` folder to:
   - Netlify
   - Vercel
   - AWS S3 + CloudFront
   - Any static hosting

3. Configure environment variables in hosting platform

## Project Structure Following Jolimont Electro Pattern

This project follows the structure and conventions of the Jolimont Electro Django project:

- **Modular Apps:** Separate apps for different functionalities
- **API-First:** RESTful API with comprehensive documentation
- **Admin Interface:** Django admin for content management
- **Serializers:** DRF serializers for data transformation
- **URL Patterns:** Clear URL routing with routers
- **Models:** Well-structured database models
- **Permissions:** Role-based access control
- **Testing:** Test coverage for critical paths
- **Documentation:** API docs with drf-spectacular

## Contributing

### Code Style
- Backend: Follow PEP 8 for Python code
- Frontend: Follow Airbnb React/TypeScript style guide
- Use meaningful variable and function names
- Write comments for complex logic
- Keep functions small and focused

### Git Workflow
1. Create feature branch from `main`
2. Make changes
3. Write/update tests
4. Commit with clear messages
5. Create pull request
6. Code review
7. Merge to `main`

## Support

For support, contact the development team or create an issue in the repository.

## License

Proprietary - All rights reserved.

---

**Built with ❤️ for Jolimont Electronics**
