import MyLink from "../my-react-router/MyLink";

const SideBar = () => {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <MyLink
        to={link.path}
        key={link.label}
        className="mb-12 bg-yellow-100"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </MyLink>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col itemss-start">
      {renderedLinks}
    </div>
  );
};

export default SideBar;
