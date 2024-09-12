import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import ProductListPage from './src/pages/ProductListPage';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ProductListPage />
    </Provider>
  );
};

export default App;
