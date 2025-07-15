import React from "react";
import classNames from "classnames";
import useNavigation from "../hooks/use-Navigation";

interface MyLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

const MyLink: React.FC<MyLinkProps> = ({
  to,
  children,
  className,
  activeClassName,
}) => {
  const { navigate, currentPath } = useNavigation();
  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

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
