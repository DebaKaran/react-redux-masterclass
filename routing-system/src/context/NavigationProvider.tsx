import { useEffect, useState } from "react";
import type { NavigationProviderProps } from "../types/NavigationProviderProps";
import { NavigationContext } from "./NavigationContext";

const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
