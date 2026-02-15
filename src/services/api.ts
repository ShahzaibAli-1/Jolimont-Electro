import axios, { AxiosInstance, AxiosError } from 'axios';

// Base API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

// Create axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Types
export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  phone?: string;
  address?: string;
  city?: string;
  postal_code?: string;
  country: string;
  profile?: {
    preferred_language: string;
    total_orders: number;
    total_spent: string;
    loyalty_points: number;
  };
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  sku: string;
  brand_name: string;
  category_name: string;
  price: string;
  sale_price?: string;
  effective_price: string;
  image: string;
  in_stock: boolean;
  is_compatible: boolean;
  fast_delivery: boolean;
  ai_recommended: boolean;
  average_rating: number;
  review_count: number;
}

export interface ProductDetail extends Product {
  description: string;
  brand: any;
  category: any;
  stock_quantity: number;
  is_low_stock: boolean;
  is_original: boolean;
  images: string[];
  specifications: Array<{ name: string; value: string }>;
  compatibilities: Array<any>;
  reviews: Array<any>;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  total: string;
}

export interface Cart {
  id: number;
  items: CartItem[];
  subtotal: string;
  item_count: number;
}

export interface Order {
  id: number;
  order_number: string;
  status: string;
  payment_status: string;
  total: string;
  created_at: string;
  items: Array<any>;
}

export interface Payment {
  id: number;
  order: number;
  order_number: string;
  payment_method: 'stripe' | 'paypal' | 'card';
  amount: string;
  currency: string;
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'refunded' | 'cancelled';
  transaction_id: string;
  card_last4?: string;
  card_brand?: string;
  created_at: string;
  completed_at?: string;
  error_message?: string;
}

export interface StripePaymentIntent {
  clientSecret: string;
  paymentIntentId: string;
  publicKey: string;
  payment_id: number;
}

export interface PayPalOrder {
  paypalOrderId: string;
  approvalUrl: string;
  payment_id: number;
}

// Auth API
export const authAPI = {
  register: (data: any) => apiClient.post('/auth/register/', data),
  login: (email: string, password: string) => 
    apiClient.post('/auth/login/', { email, password }),
  logout: () => apiClient.post('/auth/logout/'),
  getUser: () => apiClient.get('/auth/user/'),
  updateUser: (data: any) => apiClient.put('/auth/user/', data),
  changePassword: (oldPassword: string, newPassword: string) =>
    apiClient.post('/auth/change-password/', {
      old_password: oldPassword,
      new_password: newPassword,
    }),
};

// Products API
export const productsAPI = {
  list: (params?: any) => apiClient.get('/products/', { params }),
  get: (slug: string) => apiClient.get(`/products/${slug}/`),
  featured: () => apiClient.get('/products/featured/'),
  bestsellers: () => apiClient.get('/products/bestsellers/'),
  newArrivals: () => apiClient.get('/products/new_arrivals/'),
  aiSearch: (query: string) => apiClient.post('/products/ai_search/', { query }),
  aiDiagnostic: (appliance: string, symptoms: string[]) =>
    apiClient.post('/products/ai_diagnostic/', { appliance, symptoms }),
  searchByModel: (applianceModel: string, applianceType?: string) =>
    apiClient.post('/products/search_by_model/', {
      appliance_model: applianceModel,
      appliance_type: applianceType,
    }),
  addReview: (slug: string, data: any) =>
    apiClient.post(`/products/${slug}/add_review/`, data),
};

// Brands API
export const brandsAPI = {
  list: () => apiClient.get('/products/brands/'),
  get: (slug: string) => apiClient.get(`/products/brands/${slug}/`),
  products: (slug: string, params?: any) =>
    apiClient.get(`/products/brands/${slug}/products/`, { params }),
};

// Categories API
export const categoriesAPI = {
  list: () => apiClient.get('/products/categories/'),
  get: (slug: string) => apiClient.get(`/products/categories/${slug}/`),
  products: (slug: string, params?: any) =>
    apiClient.get(`/products/categories/${slug}/products/`, { params }),
};

// Cart API
export const cartAPI = {
  get: () => apiClient.get('/orders/cart/'),
  addItem: (productId: number, quantity: number = 1) =>
    apiClient.post('/orders/cart/add_item/', {
      product_id: productId,
      quantity,
    }),
  updateItem: (itemId: string, quantity: number) =>
    apiClient.post('/orders/cart/update_item/', {
      item_id: itemId,
      quantity,
    }),
  removeItem: (itemId: string) =>
    apiClient.post('/orders/cart/remove_item/', { item_id: itemId }),
  clear: () => apiClient.post('/orders/cart/clear/'),
};

// Orders API
export const ordersAPI = {
  list: () => apiClient.get('/orders/orders/'),
  get: (id: number) => apiClient.get(`/orders/orders/${id}/`),
  create: (data: any) => apiClient.post('/orders/orders/', data),
  track: (id: number) => apiClient.get(`/orders/orders/${id}/track/`),
  cancel: (id: number) => apiClient.post(`/orders/orders/${id}/cancel/`),
};

// Payment API
export const paymentAPI = {
  // List user's payments
  list: () => apiClient.get<Payment[]>('/payments/'),
  
  // Get specific payment
  get: (id: number) => apiClient.get<Payment>(`/payments/${id}/`),
  
  // Stripe payment flow
  stripe: {
    createIntent: (orderId: number) =>
      apiClient.post<StripePaymentIntent>('/payments/stripe/create-intent/', {
        order_id: orderId,
      }),
    confirmPayment: (paymentIntentId: string, orderId: number) =>
      apiClient.post('/payments/stripe/confirm/', {
        payment_intent_id: paymentIntentId,
        order_id: orderId,
      }),
  },
  
  // PayPal payment flow
  paypal: {
    createOrder: (orderId: number) =>
      apiClient.post<PayPalOrder>('/payments/paypal/create-order/', {
        order_id: orderId,
      }),
    capturePayment: (paypalOrderId: string, orderId: number) =>
      apiClient.post('/payments/paypal/capture/', {
        paypal_order_id: paypalOrderId,
        order_id: orderId,
      }),
  },
  
  // Refund payment
  refund: (paymentId: number, amount?: number, reason?: string) =>
    apiClient.post(`/payments/${paymentId}/refund/`, {
      amount,
      reason,
    }),
};

// Customer Service API
export const customerServiceAPI = {
  submitContact: (data: any) => apiClient.post('/customer-service/contact/', data),
  sendChatMessage: (message: string, sessionId?: string) =>
    apiClient.post('/customer-service/chatbot/send_message/', {
      message,
      session_id: sessionId,
    }),
  getChatHistory: (sessionId: string) =>
    apiClient.get('/customer-service/chatbot/get_conversation/', {
      params: { session_id: sessionId },
    }),
  submitDiagnostic: (data: any) =>
    apiClient.post('/customer-service/diagnostic/', data),
};

// Content API
export const contentAPI = {
  blogList: (params?: any) => apiClient.get('/content/blog/', { params }),
  blogGet: (slug: string) => apiClient.get(`/content/blog/${slug}/`),
  blogLatest: () => apiClient.get('/content/blog/latest/'),
  faqList: () => apiClient.get('/content/faq/'),
  faqByCategory: () => apiClient.get('/content/faq/by_category/'),
  getPage: (pageType: string) => apiClient.get(`/content/pages/${pageType}/`),
  subscribeNewsletter: (email: string, name?: string) =>
    apiClient.post('/content/newsletter/subscribe/', { email, name }),
  unsubscribeNewsletter: (email: string) =>
    apiClient.post('/content/newsletter/unsubscribe/', { email }),
};

export default apiClient;
