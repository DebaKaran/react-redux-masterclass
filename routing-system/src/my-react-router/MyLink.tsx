import React, { useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";

interface MyLinkProps {
  to: string;
  children: React.ReactNode;
}

const MyLink: React.FC<MyLinkProps> = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    // Prevent full page reload
    event.preventDefault();

    navigate(to);
  };
  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default MyLink;
