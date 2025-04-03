import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { ReactElement, ReactNode } from 'react';

// Versão correta com TypeScript
export function ProtectedRoute({ children }: { children: ReactNode }): ReactElement | null {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (children as ReactElement) : <Navigate to="/login" replace />;
}