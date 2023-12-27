import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../features/auth/Login";
import Home from "../features/home/Home";
import { ContentLayout } from "../components/Layout/ContentLayout";
import Register from "../features/auth/Register";
import EmailConfirm from "../features/auth/EmailConfirm";
import Product from "../features/product/Product";
import PrivateRoutes from "./PrivateRoutes";
import Checkout from "../features/checkout/Checkout";
import { Category } from "@mui/icons-material";
import { useEffect } from "react";

const Router = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ContentLayout>
              <Home />
            </ContentLayout>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ContentLayout>
              <Product />
            </ContentLayout>
          }
        />
        <Route
          path="/login"
          element={
            <ContentLayout>
              <Login />
            </ContentLayout>
          }
        />
        <Route
          path="/register"
          element={
            <ContentLayout>
              <Register />
            </ContentLayout>
          }
        />
        <Route
          path="/categories"
          element={
            <ContentLayout>
              <Category />
            </ContentLayout>
          }
        />
        <Route path="/confirmemail" element={<EmailConfirm />} />
        <Route path="/user" element={<PrivateRoutes />}>
          <Route
            path="checkout"
            element={
              <ContentLayout>
                <Checkout />
              </ContentLayout>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
