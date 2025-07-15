import React, { useContext } from "react";
import { NavigationContext } from "../context/NavigationContext";
import classNames from "classnames";

interface MyLinkProps {
  to: string;
  children: React.ReactNode;
}

const MyLink: React.FC<MyLinkProps> = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);
  const classes = classNames("text-blue-500");

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    // Allow browser default behavior for new tab (Cmd/Ctrl + Click)
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    // Prevent full page reload
    event.preventDefault();

    navigate(to);
  };
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default MyLink;
