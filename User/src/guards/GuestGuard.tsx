import React, { FC } from "react";
import { Navigate } from "react-router-dom";

// configs
import { PATH_NAME } from "../configs/pathName";

type GuestGuardProps = {
  children: React.ReactNode;
};

// services
import authService from "../services/authService";

const GuestGuard: FC<GuestGuardProps> = ({ children }) => {
  const isAuth = authService.getAccessToken();

  if (isAuth) return <Navigate to={PATH_NAME.ROOT} />;

  return <>{children}</>;
};

export default GuestGuard;
