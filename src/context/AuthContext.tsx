import React, { createContext, useContext, useState, useEffect } from 'react';
import { AdminUser } from '../types';
import { api } from '../api';

interface AuthContextType {
  currentUser: AdminUser | null;
  isAdmin: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const checkAuth = async () => {
    setIsLoading(true);
    try {
      const user = await api.getAdminMe();
      setCurrentUser(user);
    } catch {
      setCurrentUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const res = await api.adminLogin(email, password);
      if (res.success && res.user) {
        setCurrentUser(res.user);
        return { success: true };
      }
      return { success: false, error: res.error || 'Invalid credentials' };
    } catch (err: any) {
      return { success: false, error: err?.message || 'Authentication failed' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await api.adminLogout();
      setCurrentUser(null);
    } catch {
      setCurrentUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const isAdmin = currentUser !== null && (currentUser.role === 'superadmin' || currentUser.role === 'admin' || currentUser.role === 'moderator');

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAdmin,
        isLoading,
        login,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
