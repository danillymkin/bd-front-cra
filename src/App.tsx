import React from 'react';
import AppRouter from './components/widgets/AppRouter/AppRouter';
import { useTypedDispatch } from './hooks/useTypedDispatch';
import { ACCESS_TOKEN_KEY } from './constants/localStorage';
import { profile } from './store/auth/authSlice';

function App() {
  const dispatch = useTypedDispatch();

  if (localStorage.getItem(ACCESS_TOKEN_KEY)) {
    dispatch(profile());
  }

  return (
    <AppRouter />
  );
}

export default App;
