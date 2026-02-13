# Jolimont Electronics - HTML Version

## 📋 Overview

This is a complete HTML/CSS/JavaScript conversion of the Premium E-commerce Site Design. All animations, interactions, and functionality from the original React application have been preserved.

## 🚀 Quick Start

1. Open `index.html` in your web browser
2. Navigate through the site using the menu and links
3. All pages are fully functional and interactive

## 📁 Project Structure

```
html-version/
├── index.html                 # Homepage
├── css/
│   └── main.css              # All styles and animations
├── js/
│   └── main.js               # All JavaScript functionality
├── assets/                    # Images and media files
└── pages/                     # Individual page files
    ├── catalog.html          # Product catalog with filters
    ├── product-detail.html   # Product detail page
    ├── diagnostic.html       # AI diagnostic wizard
    ├── checkout.html         # Checkout and payment
    ├── login.html            # Login/Register
    ├── order-tracking.html   # Track orders
    ├── faq.html              # Frequently asked questions
    └── customer-service.html # Customer support
```

## ✨ Features

### 🎨 Animations
All CSS3 animations are included:
- **fadeIn** - Smooth fade-in effect
- **slideInLeft** - Slide from left animation
- **slideInRight** - Slide from right animation
- **scaleIn** - Scale-up animation
- **bounce** - Bouncing animation
- **Scroll Reveal** - Elements animate when scrolling into view

### 🛒 Shopping Cart
- Add/remove products
- Quantity adjustment
- Persistent storage (localStorage)
- Real-time price calculation
- Cart drawer with smooth animations

### 🎠 Carousels
- Auto-rotating product carousel
- Trust bar mobile carousel
- Smooth transitions

### 🤖 AI Diagnostic
- Multi-step wizard (4 steps)
- Progress bar with animations
- Appliance and brand selection
- Problem identification
- AI-powered recommendations

### 📱 Responsive Design
- Mobile-friendly navigation
- Tablet and desktop layouts
- Touch-optimized interactions

### 🔍 Product Features
- Product filters (category, brand, price)
- Search functionality
- Product comparison
- Reviews and ratings
- Related products

### 💳 Checkout Process
- Form validation
- Multiple payment methods (Card, PayPal, Bank Transfer)
- Order summary
- Promo code support

### 🌐 Multi-language Support
- French (default)
- Framework ready for additional languages

## 🎯 Key Pages

### Homepage (`index.html`)
- Hero section with search
- Trust bar with rotating badges
- Sustainability section
- Shop by appliance category
- Featured brands grid
- Product carousel
- Full footer with links

### Product Catalog (`pages/catalog.html`)
- Sidebar filters
- Product grid
- Sorting options
- Pagination
- Search functionality

### Product Detail (`pages/product-detail.html`)
- Image gallery
- Product specifications
- Tabs (Description, Compatibility, Installation, Reviews)
- Add to cart functionality
- Related products

### AI Diagnostic (`pages/diagnostic.html`)
- Step 1: Select appliance type
- Step 2: Choose brand
- Step 3: Describe problem
- Step 4: View AI recommendations

### Checkout (`pages/checkout.html`)
- Delivery information form
- Payment method selection
- Order summary
- Promo code input
- Form validation

### Order Tracking (`pages/order-tracking.html`)
- Order number search
- Delivery timeline
- Status updates
- Order details

### FAQ (`pages/faq.html`)
- Accordion-style questions
- Search functionality
- Category filtering
- 8+ common questions

### Customer Service (`pages/customer-service.html`)
- Contact methods (Phone, Email, Chat)
- Contact form
- Quick links to FAQ topics

## 🔧 Technical Details

### Dependencies
- **Lucide Icons** - Icon library (loaded via CDN)
- No other external dependencies required

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### JavaScript Features
- Vanilla JavaScript (no frameworks)
- localStorage for cart persistence
- Intersection Observer for scroll animations
- Event delegation for better performance
- Toast notifications
- Modal and drawer management

### CSS Features
- CSS Grid and Flexbox layouts
- CSS Variables for theming
- @keyframes animations
- Media queries for responsive design
- Smooth transitions
- Hover effects

## 🎨 Customization

### Colors
Edit CSS variables in `css/main.css`:
```css
:root {
    --primary: #2563eb;
    --secondary: #f3f4f6;
    --accent: #10b981;
    /* ... more colors */
}
```

### Animations
All animations are defined in `css/main.css` under the `@keyframes` section.

### Products
Edit the `mockProducts` array in `js/main.js` to add/modify products.

## 📝 How to Deploy

### Local Server
```bash
# Use any simple HTTP server
python -m http.server 8000
# or
npx serve .
```

### Static Hosting
Upload the entire `html-version` folder to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## 🔒 Features Preserved from React App

✅ All animations (Framer Motion → CSS3)
✅ Cart functionality (React Context → localStorage)
✅ Carousel (React Slick → Custom JS)
✅ Form validation
✅ Modal/drawer patterns
✅ Responsive design (Tailwind → Custom CSS)
✅ Icon system (Lucide React → Lucide CDN)
✅ State management (React hooks → Vanilla JS)

## 📱 Mobile Features

- Hamburger menu
- Touch-optimized carousels
- Mobile-specific layouts
- Swipe-friendly drawers

## 🌟 Interactive Elements

- Hover effects on all buttons and cards
- Active states for navigation
- Loading states
- Toast notifications
- Smooth page transitions
- Scroll-triggered animations

## 💡 Tips

1. **Testing Locally**: Use a local server (not just opening the file) to avoid CORS issues with some browsers
2. **Cart Persistence**: Cart data is stored in localStorage - clear browser data to reset
3. **Icons**: Ensure internet connection for Lucide icons to load from CDN
4. **Images**: All images are referenced from the `assets` folder

## 🐛 Troubleshooting

**Icons not showing?**
- Check internet connection (Lucide loads via CDN)
- Ensure `lucide.createIcons()` is called after DOM loads

**Animations not working?**
- Check if CSS file is properly linked
- Verify browser supports CSS animations

**Cart not persisting?**
- Check if localStorage is enabled in browser
- Private/Incognito mode may block localStorage

## 📄 License

This is a conversion of the Premium E-commerce Site Design for educational purposes.

## 📞 Support

For questions or issues:
- Check the FAQ page
- Review the customer service page
- Contact via the contact form

---

**Built with ❤️ using pure HTML, CSS, and JavaScript**
**100% Working | All Animations Preserved | Mobile Responsive**
