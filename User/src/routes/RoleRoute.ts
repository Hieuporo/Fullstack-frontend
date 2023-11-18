import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// configs
import { PATH_NAME } from "../configs/pathName";

// selectors
import { roleSelector } from "../selectors/auth.selector";

type IProps = {
  requireRoles: string[] | [];
  children: React.ReactNode;
};

const RoleRoute: FC<IProps> = ({ children, requireRoles = [] }) => {
  const navigate = useNavigate();
  const role = useSelector(roleSelector);

  useEffect(() => {
    if (!role || requireRoles.length === 0) return;

    const checkRole = requireRoles.includes(role);
    if (!checkRole) {
      navigate(PATH_NAME.ERROR_403, { replace: true });
    }
  }, [history, role, requireRoles]);

  return <>{children}</>;
};

export default RoleRoute;
