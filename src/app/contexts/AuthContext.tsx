import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI, User } from '../../services/api';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

interface RegisterData {
  email: string;
  password: string;
  password2: string;
  first_name: string;
  last_name: string;
  username?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      // Optionally refresh user data from server
      refreshUser();
    } else {
      setIsLoading(false);
    }
  }, []);

  const refreshUser = async () => {
    try {
      const response = await authAPI.getUser();
      const userData = response.data;
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error('Failed to refresh user:', error);
      // If refresh fails, clear auth data
      logout();
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await authAPI.login(email, password);
      const { token: authToken, user: userData } = response.data;

      // Store token and user data
      localStorage.setItem('authToken', authToken);
      localStorage.setItem('user', JSON.stringify(userData));
      
      setToken(authToken);
      setUser(userData);
    } catch (error: any) {
      console.error('Login failed:', error);
      throw new Error(
        error.response?.data?.non_field_errors?.[0] || 
        error.response?.data?.detail ||
        'Échec de la connexion. Vérifiez vos identifiants.'
      );
    }
  };

  const register = async (data: RegisterData) => {
    try {
      console.log('Registration data being sent:', data);
      const response = await authAPI.register(data);
      const { token: authToken, user: userData } = response.data;

      // Store token and user data
      localStorage.setItem('authToken', authToken);
      localStorage.setItem('user', JSON.stringify(userData));
      
      setToken(authToken);
      setUser(userData);
    } catch (error: any) {
      console.error('Registration failed:', error);
      console.error('Error response:', error.response?.data);
      
      // Extract error messages
      const errors = error.response?.data;
      if (errors) {
        const errorMessages = [];
        if (errors.email) errorMessages.push(errors.email[0] || errors.email);
        if (errors.username) errorMessages.push(errors.username[0] || errors.username);
        if (errors.password) errorMessages.push(errors.password[0] || errors.password);
        if (errors.password2) errorMessages.push(errors.password2[0] || errors.password2);
        if (errors.non_field_errors) errorMessages.push(errors.non_field_errors[0] || errors.non_field_errors);
        
        if (errorMessages.length > 0) {
          throw new Error(errorMessages.join(' '));
        }
      }
      
      throw new Error('Échec de l\'inscription. Veuillez réessayer.');
    }
  };

  const logout = async () => {
    try {
      await authAPI.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear local storage and state
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      setToken(null);
      setUser(null);
    }
  };

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated: !!token && !!user,
    isLoading,
    login,
    register,
    logout,
    refreshUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
