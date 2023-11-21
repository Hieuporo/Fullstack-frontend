import { Route, Routes } from "react-router-dom";
import Login from "../features/auth/Login";
import Home from "../pages/Home";
import { ContentLayout } from "../components/Layout/ContentLayout";

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
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Router;
