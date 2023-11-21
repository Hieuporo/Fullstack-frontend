import { Route, Routes } from "react-router-dom";
import Login from "../features/auth/Login";
import Home from "../pages/Home";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Router;
