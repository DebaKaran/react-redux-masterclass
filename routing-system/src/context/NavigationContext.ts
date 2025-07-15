import { createContext } from "react";
import type { NavigationContextType } from "../types/NavigationContextType";

// 2. Create context with default value (used for type-safety only)
export const NavigationContext = createContext<NavigationContextType>({
  currentPath: window.location.pathname,
  navigate: () => {},
});
