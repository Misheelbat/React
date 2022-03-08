import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../hooks/useUserContext';
export default function ProtectedRoute({ route, rerout }) {
  const { user } = useUserContext();
  if (rerout) {
    return user ? <Outlet /> : <Navigate to={route} />;
  }
  if (!rerout) {
    return user ? <Navigate to={route} /> : <Outlet />;
  }
}
