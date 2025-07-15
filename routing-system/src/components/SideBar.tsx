import React from "react";
import MyLink from "../my-react-router/MyLink";

const SideBar = () => {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <MyLink to={link.path} key={link.label} className="mb-12 bg-yellow-100">
        {link.label}
      </MyLink>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col">
      {renderedLinks}
    </div>
  );
};

export default SideBar;
