# 🚀 Quick Start Guide - Jolimont Electronics

This guide will help you get both the backend and frontend up and running in minutes.

## Prerequisites

✅ **Backend:**
- Python 3.10 or higher
- pip (Python package manager)

✅ **Frontend:**
- Node.js 18 or higher
- npm or yarn

## Setup Instructions

### Option 1: Automated Setup (Recommended)

#### Backend Setup

**Windows:**
```bash
cd backend
setup.bat
```

**Linux/Mac:**
```bash
cd backend
chmod +x setup.sh
./setup.sh
```

The script will:
- Create a virtual environment
- Install all dependencies
- Set up the database
- Prompt you to create a superuser

#### Frontend Setup

```bash
# Navigate back to project root
cd ..

# Install dependencies
npm install

# Start development server
npm run dev
```

---

### Option 2: Manual Setup

#### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create virtual environment:**
   ```bash
   python -m venv venv
   ```

3. **Activate virtual environment:**
   - Windows: `venv\Scripts\activate`
   - Linux/Mac: `source venv/bin/activate`

4. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

5. **Set up environment variables:**
   ```bash
   # Windows
   copy .env.example .env
   
   # Linux/Mac
   cp .env.example .env
   ```
   
   Edit `.env` with your configuration (or use defaults for development)

6. **Run database migrations:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

7. **Create superuser (admin account):**
   ```bash
   python manage.py createsuperuser
   ```
   
   Enter your desired username, email, and password.

8. **Start the development server:**
   ```bash
   python manage.py runserver
   ```

Backend is now running at: **http://localhost:8000**

#### Frontend Setup

1. **Navigate to project root:**
   ```bash
   cd ..
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   # Windows
   copy .env.example .env
   
   # Linux/Mac
   cp .env.example .env
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

Frontend is now running at: **http://localhost:5173**

---

## Access Points

After successful setup, you can access:

### Backend
- **API Base:** http://localhost:8000/api/
- **Admin Panel:** http://localhost:8000/admin/
- **API Documentation (Swagger):** http://localhost:8000/api/docs/
- **API Documentation (ReDoc):** http://localhost:8000/api/redoc/

### Frontend
- **Main Application:** http://localhost:5173

## Default Admin Credentials

Use the credentials you created during the superuser setup step.

## Testing the Integration

1. **Check Backend is running:**
   - Open http://localhost:8000/api/ in your browser
   - You should see the API root

2. **Check Frontend is running:**
   - Open http://localhost:5173 in your browser
   - You should see the Jolimont Electronics homepage

3. **Test API connection:**
   - Try registering a new user from the frontend
   - Try browsing products
   - Try adding items to cart

## Common Issues & Solutions

### Backend Issues

**Issue:** `ModuleNotFoundError: No module named 'django'`
- **Solution:** Make sure you activated the virtual environment
  ```bash
  # Windows
  venv\Scripts\activate
  
  # Linux/Mac
  source venv/bin/activate
  ```

**Issue:** `django.db.utils.OperationalError: no such table`
- **Solution:** Run migrations
  ```bash
  python manage.py migrate
  ```

**Issue:** Port 8000 already in use
- **Solution:** Stop other Django servers or use a different port
  ```bash
  python manage.py runserver 8001
  ```

### Frontend Issues

**Issue:** `Cannot find module 'axios'`
- **Solution:** Install dependencies
  ```bash
  npm install
  ```

**Issue:** Port 5173 already in use
- **Solution:** Vite will automatically try the next available port, or you can specify one in `vite.config.ts`

**Issue:** API connection errors
- **Solution:** Make sure backend is running on port 8000 and `.env` file has correct `VITE_API_URL`

## Next Steps

1. **Explore the Admin Panel:** http://localhost:8000/admin/
   - Add brands
   - Add categories
   - Add products
   - Configure content pages

2. **Read the Documentation:**
   - Backend: See `backend/README.md`
   - Full Project: See `PROJECT_README.md`

3. **Start Development:**
   - Backend code is in `backend/`
   - Frontend code is in `src/`
   - API service is in `src/services/api.ts`

## Development Workflow

### Backend Development
```bash
cd backend
source venv/bin/activate  # or venv\Scripts\activate on Windows

# Make model changes
# Then run:
python manage.py makemigrations
python manage.py migrate

# Run tests
python manage.py test

# Start server
python manage.py runserver
```

### Frontend Development
```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Need Help?

- Check the comprehensive `PROJECT_README.md`
- Review API documentation at http://localhost:8000/api/docs/
- Check Django logs in the terminal
- Check browser console for frontend errors

---

**Happy Coding! 🎉**
