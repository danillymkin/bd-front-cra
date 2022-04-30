import React from 'react';
import AppRouter from './components/widgets/AppRouter/AppRouter';
import { useRefresh } from './hooks/useRefresh';

function App() {
  useRefresh();

  return (
    <AppRouter />
  );
}

export default App;
