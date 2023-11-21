import { Route, Routes } from "react-router-dom";
import Login from "../features/auth/Login";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Hello page</div>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Router;
