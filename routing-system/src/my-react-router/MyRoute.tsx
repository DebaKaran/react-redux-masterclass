import React, { useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";

interface MyRouteProps {
  path: string;
  children: React.ReactNode;
}

const MyRoute: React.FC<MyRouteProps> = ({ path, children }) => {
  const { currentPath } = useContext(NavigationContext);

  return currentPath === path ? children : null;
};

export default MyRoute;
