import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProps {
  isAllowed: boolean;
  redirctedPath: string;
  children: ReactNode;
}
function ProtectedRoutes({ children, isAllowed, redirctedPath }: IProps) {
  if (!isAllowed) return <Navigate to={redirctedPath} replace />;
  return <>{children}</>;
}
export default ProtectedRoutes;
