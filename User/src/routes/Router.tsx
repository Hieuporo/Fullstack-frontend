import { Route, Routes } from "react-router-dom";
import Login from "../features/auth/Login";
import Home from "../features/home/Home";
import { ContentLayout } from "../components/Layout/ContentLayout";
import Register from "../features/auth/Register";
import EmailConfirm from "../features/auth/EmailConfirm";

const Router = () => {
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
        <Route path="/confirmemail" element={<EmailConfirm />} />
      </Routes>
    </div>
  );
};

export default Router;
