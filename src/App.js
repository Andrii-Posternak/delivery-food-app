import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from 'utils/routes';
import { ShoppingCartPage } from 'pages/ShoppingCartPage/ShoppingCartPage';
import { ShopsPage } from 'pages/ShopsPage/ShopsPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.shops} element={<ShopsPage />} />
          <Route path={routes.basket} element={<ShoppingCartPage />} />
          <Route path="*" element={<Navigate to={routes.shops} />} />
        </Route>
      </Routes>
    </>
  );
};
