import React from "react";

interface MyLinkProps {
  to: string;
  children: React.ReactNode;
}

const MyLink: React.FC<MyLinkProps> = ({ to, children }) => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    // Prevent full page reload
    event.preventDefault();

    // Update the URL
    window.history.pushState({}, "", to);

    // Fake popstate event to trigger route change in our app
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default MyLink;
