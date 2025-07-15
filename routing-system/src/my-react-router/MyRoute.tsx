import React from "react";
import useNavigation from "../hooks/use-Navigation";

interface MyRouteProps {
  path: string;
  children: React.ReactNode;
}

const MyRoute: React.FC<MyRouteProps> = ({ path, children }) => {
  const { currentPath } = useNavigation();

  return currentPath === path ? children : null;
};

export default MyRoute;
