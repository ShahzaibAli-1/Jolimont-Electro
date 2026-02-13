@echo off
REM Jolimont Electronics Backend Setup Script for Windows

echo ==========================================
echo Jolimont Electronics Backend Setup
echo ==========================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo Error: Python is not installed. Please install Python 3.10+ first.
    pause
    exit /b 1
)

REM Display Python version
echo Python version:
python --version
echo.

REM Create virtual environment
echo Creating virtual environment...
python -m venv venv

REM Activate virtual environment
echo Activating virtual environment...
call venv\Scripts\activate.bat

REM Upgrade pip
echo Upgrading pip...
python -m pip install --upgrade pip

REM Install dependencies
echo Installing dependencies...
pip install -r requirements.txt

REM Copy environment file if not exists
if not exist .env (
    echo Creating .env file from template...
    copy .env.example .env
    echo Please edit .env file with your configuration!
)

REM Run migrations
echo.
echo Running database migrations...
python manage.py makemigrations
python manage.py migrate

REM Create superuser prompt
echo.
set /p CREATE_SUPER="Do you want to create a superuser account? (y/n): "
if /i "%CREATE_SUPER%"=="y" (
    python manage.py createsuperuser
)

echo.
echo ==========================================
echo Setup completed successfully!
echo ==========================================
echo.
echo To start the development server, run:
echo   python manage.py runserver
echo.
echo API will be available at: http://localhost:8000/api/
echo Admin panel: http://localhost:8000/admin/
echo API Documentation: http://localhost:8000/api/docs/
echo.
pause
