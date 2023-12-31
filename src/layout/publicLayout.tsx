import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { useEffect } from "react";

const PublicLayout = () => {
  const { isAuth } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/chat");
    }
  });

  return <Outlet />;
};
export default PublicLayout;
