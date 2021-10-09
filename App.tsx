import React from 'react';
import MainApp from './src/app';

// store
import { Provider as StoreProvider } from 'react-redux';
import store from './src/store/store';

export default function App() {
  return (
    <StoreProvider store={store}>
      <MainApp />
    </StoreProvider>
  )
}
