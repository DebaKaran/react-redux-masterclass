import React, { useEffect, useState } from "react";

interface MyRouteProps {
  path: string;
  children: React.ReactNode;
}

const MyRoute: React.FC<MyRouteProps> = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default MyRoute;
