import { Navigate, Outlet } from "react-router-dom";

export const Required = () => {
  const token = localStorage.getItem("token");
  return <>{token ? <Outlet /> : <Navigate to={"/"} />}</>;
};
