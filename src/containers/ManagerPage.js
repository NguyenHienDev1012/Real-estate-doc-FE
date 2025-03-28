import React, {} from 'react';
// import { useHistory } from 'react-router-dom';
// import { AccountContext } from '../store/Accounts';
import { Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Products from '../components/products/Products';
import ProductDetails from '../components/products/ProductDetails';
import Dashboard from '../components/dashboard/Dashboard';
import { SnackbarProvider } from 'notistack';

const ManagerPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SnackbarProvider maxSnack={3}>
        <Layout />
        <Route path="/manager/dashboard" exact component={Dashboard} />
        <Route path="/manager/product" exact component={Products} />
        <Route path="/manager/product/:id" component={ProductDetails} />
      </SnackbarProvider>
    </div>
  );
};
export default ManagerPage;
