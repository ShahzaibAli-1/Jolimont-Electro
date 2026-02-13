"""
Script to populate the database with sample data for testing
Run with: python manage.py shell < seed_data.py
"""

from django.contrib.auth import get_user_model
from products.models import Brand, Category, Product, ProductSpecification, ProductCompatibility
from content.models import FAQ, Page, BlogArticle
from django.utils import timezone
import random

User = get_user_model()

print("Starting database seeding...")

# Create sample users
print("Creating users...")
if not User.objects.filter(email='admin@jolimont.com').exists():
    admin = User.objects.create_superuser(
        username='admin',
        email='admin@jolimont.com',
        password='admin123',
        first_name='Admin',
        last_name='User'
    )
    print(f"✓ Created admin user: {admin.email}")

if not User.objects.filter(email='customer@example.com').exists():
    customer = User.objects.create_user(
        username='customer',
        email='customer@example.com',
        password='customer123',
        first_name='John',
        last_name='Doe'
    )
    print(f"✓ Created customer user: {customer.email}")

# Create brands
print("\nCreating brands...")
brands_data = [
    {'name': 'Bosch', 'description': 'German engineering and quality'},
    {'name': 'Siemens', 'description': 'Premium home appliances'},
    {'name': 'Samsung', 'description': 'Innovation and technology'},
    {'name': 'LG', 'description': 'Life\'s Good'},
    {'name': 'Whirlpool', 'description': 'American home appliance leader'},
    {'name': 'Miele', 'description': 'Forever better'},
    {'name': 'Electrolux', 'description': 'Shape living for the better'},
    {'name': 'Beko', 'description': 'Everyday innovations'},
    {'name': 'Hotpoint', 'description': 'Since 1911'},
    {'name': 'Zanussi', 'description': 'Italian design'},
]

brands = {}
for brand_data in brands_data:
    brand, created = Brand.objects.get_or_create(
        name=brand_data['name'],
        defaults={'description': brand_data['description']}
    )
    brands[brand_data['name']] = brand
    if created:
        print(f"✓ Created brand: {brand.name}")

# Create categories
print("\nCreating categories...")
categories_data = [
    {'name': 'Washing Machine Parts', 'icon': 'WashingMachine'},
    {'name': 'Dishwasher Parts', 'icon': 'Utensils'},
    {'name': 'Oven Parts', 'icon': 'Oven'},
    {'name': 'Refrigerator Parts', 'icon': 'Refrigerator'},
    {'name': 'Dryer Parts', 'icon': 'Wind'},
    {'name': 'Cooling & Heating', 'icon': 'Thermometer'},
    {'name': 'Pumps & Motors', 'icon': 'Cog'},
    {'name': 'Filters & Seals', 'icon': 'Filter'},
    {'name': 'Electronic Components', 'icon': 'Cpu'},
    {'name': 'Accessories', 'icon': 'Package'},
]

categories = {}
for cat_data in categories_data:
    category, created = Category.objects.get_or_create(
        name=cat_data['name'],
        defaults={'icon': cat_data['icon']}
    )
    categories[cat_data['name']] = category
    if created:
        print(f"✓ Created category: {category.name}")

# Create sample products
print("\nCreating products...")
products_data = [
    {
        'name': 'Universal Washing Machine Door Seal',
        'sku': 'WM-SEAL-001',
        'description': 'High-quality replacement door seal for washing machines. Compatible with multiple brands.',
        'brand': 'Bosch',
        'category': 'Washing Machine Parts',
        'price': '24.99',
        'stock_quantity': 150,
        'is_compatible': True,
        'is_original': True,
        'fast_delivery': True,
    },
    {
        'name': 'Dishwasher Spray Arm',
        'sku': 'DW-ARM-002',
        'description': 'Lower spray arm for dishwashers. Ensures optimal water distribution.',
        'brand': 'Siemens',
        'category': 'Dishwasher Parts',
        'price': '18.50',
        'stock_quantity': 200,
        'is_compatible': True,
        'fast_delivery': True,
    },
    {
        'name': 'Oven Heating Element',
        'sku': 'OV-HEAT-003',
        'description': '2000W heating element for electric ovens. Easy to install.',
        'brand': 'Bosch',
        'category': 'Oven Parts',
        'price': '45.00',
        'sale_price': '39.99',
        'stock_quantity': 80,
        'is_original': True,
        'ai_recommended': True,
    },
    {
        'name': 'Refrigerator Water Filter',
        'sku': 'RF-FILT-004',
        'description': 'Advanced water filtration system. Reduces chlorine and contaminants.',
        'brand': 'Samsung',
        'category': 'Refrigerator Parts',
        'price': '32.99',
        'stock_quantity': 120,
        'is_compatible': True,
        'fast_delivery': True,
    },
    {
        'name': 'Washing Machine Drum Belt',
        'sku': 'WM-BELT-005',
        'description': 'Durable poly-v belt for washing machine drums. Long-lasting performance.',
        'brand': 'Whirlpool',
        'category': 'Washing Machine Parts',
        'price': '15.99',
        'stock_quantity': 250,
        'is_compatible': True,
    },
    {
        'name': 'Dishwasher Pump Motor',
        'sku': 'DW-PUMP-006',
        'description': 'High-efficiency circulation pump for dishwashers.',
        'brand': 'Miele',
        'category': 'Pumps & Motors',
        'price': '89.99',
        'stock_quantity': 45,
        'is_original': True,
    },
    {
        'name': 'Oven Door Glass',
        'sku': 'OV-GLASS-007',
        'description': 'Replacement inner door glass for ovens. Heat-resistant up to 300°C.',
        'brand': 'Bosch',
        'category': 'Oven Parts',
        'price': '55.00',
        'stock_quantity': 60,
        'is_original': True,
    },
    {
        'name': 'Thermostat for Refrigerators',
        'sku': 'RF-THERM-008',
        'description': 'Electronic thermostat with precise temperature control.',
        'brand': 'LG',
        'category': 'Cooling & Heating',
        'price': '28.50',
        'stock_quantity': 100,
        'is_compatible': True,
        'ai_recommended': True,
    },
]

for prod_data in products_data:
    brand = brands[prod_data['brand']]
    category = categories[prod_data['category']]
    
    product, created = Product.objects.get_or_create(
        sku=prod_data['sku'],
        defaults={
            'name': prod_data['name'],
            'description': prod_data['description'],
            'brand': brand,
            'category': category,
            'price': prod_data['price'],
            'sale_price': prod_data.get('sale_price'),
            'stock_quantity': prod_data['stock_quantity'],
            'is_compatible': prod_data.get('is_compatible', False),
            'is_original': prod_data.get('is_original', False),
            'fast_delivery': prod_data.get('fast_delivery', False),
            'ai_recommended': prod_data.get('ai_recommended', False),
            'is_active': True,
        }
    )
    
    if created:
        print(f"✓ Created product: {product.name}")
        
        # Add some specifications
        specs = [
            ('Warranty', '2 years'),
            ('Weight', f'{random.randint(100, 500)}g'),
            ('Dimensions', f'{random.randint(10, 30)}x{random.randint(10, 30)}x{random.randint(5, 15)}cm'),
        ]
        
        for spec_name, spec_value in specs:
            ProductSpecification.objects.create(
                product=product,
                name=spec_name,
                value=spec_value
            )

# Create FAQ entries
print("\nCreating FAQs...")
faqs_data = [
    {
        'question': 'How long does delivery take?',
        'answer': 'Standard delivery takes 3-5 business days. Express delivery is available for 1-2 days delivery.',
        'category': 'orders'
    },
    {
        'question': 'Do you offer free shipping?',
        'answer': 'Yes! We offer free shipping on all orders over €50.',
        'category': 'orders'
    },
    {
        'question': 'How can I track my order?',
        'answer': 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order in the Order Tracking section.',
        'category': 'orders'
    },
    {
        'question': 'What is your return policy?',
        'answer': 'We offer a 30-day return policy for most products. Items must be in original condition.',
        'category': 'returns'
    },
    {
        'question': 'Are these original manufacturer parts?',
        'answer': 'We offer both original manufacturer parts and high-quality compatible alternatives. Each product is clearly labeled.',
        'category': 'products'
    },
    {
        'question': 'How do I know which part I need?',
        'answer': 'Use our Free Diagnostic Tool or search by your appliance model number. Our customer service team is also happy to help!',
        'category': 'technical'
    },
]

for faq_data in faqs_data:
    faq, created = FAQ.objects.get_or_create(
        question=faq_data['question'],
        defaults={
            'answer': faq_data['answer'],
            'category': faq_data['category']
        }
    )
    if created:
        print(f"✓ Created FAQ: {faq.question[:50]}...")

# Create static pages
print("\nCreating static pages...")
pages_data = [
    {
        'page_type': 'warranty',
        'title': 'Warranty Policy',
        'content': '''
# Warranty Policy

All products sold by Jolimont Electronics come with a comprehensive warranty.

## Standard Warranty
- 2 years on all original manufacturer parts
- 1 year on compatible parts

## What's Covered
- Manufacturing defects
- Material defects
- Workmanship issues

## What's Not Covered
- Normal wear and tear
- Damage from incorrect installation
- Damage from misuse

Contact us for warranty claims.
        '''
    },
    {
        'page_type': 'returns',
        'title': 'Returns & Refunds Policy',
        'content': '''
# Returns & Refunds

## 30-Day Return Policy
You may return most items within 30 days of delivery for a full refund.

## How to Return
1. Contact customer service
2. Receive return authorization
3. Package item securely
4. Ship to our returns center

## Refund Timeline
Refunds are processed within 5-7 business days of receiving your return.
        '''
    },
    {
        'page_type': 'terms',
        'title': 'Terms & Conditions',
        'content': '''
# Terms & Conditions

By using our website and services, you agree to these terms.

## Use of Service
- You must be 18 years or older to make purchases
- Provide accurate information
- Maintain security of your account

## Product Information
- We strive for accuracy but cannot guarantee all specifications
- Prices subject to change

## Liability
- We are not liable for indirect damages
- Liability limited to purchase price
        '''
    },
]

for page_data in pages_data:
    page, created = Page.objects.get_or_create(
        page_type=page_data['page_type'],
        defaults={
            'title': page_data['title'],
            'content': page_data['content']
        }
    )
    if created:
        print(f"✓ Created page: {page.title}")

print("\n" + "="*50)
print("Database seeding completed successfully!")
print("="*50)
print("\nYou can now:")
print("- Browse products at http://localhost:5173")
print("- Manage data at http://localhost:8000/admin/")
print("- Test API at http://localhost:8000/api/docs/")
print("\nTest credentials:")
print("- Admin: admin@jolimont.com / admin123")
print("- Customer: customer@example.com / customer123")
