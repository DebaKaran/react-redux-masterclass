import React, { useEffect, useState } from "react";
import AccordionPage from "../pages/AccordionPage";
import DropDownPage from "../pages/DropDownPage";
import ButtonPage from "../pages/ButtonPage";
import MyLink from "./MyLink";

const MyRouterApp = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    const cleanUp = () => {
      window.removeEventListener("popstate", onLocationChange);
    };

    return cleanUp;
  }, []);

  // Routing logic (basic)
  let ComponentToShow;
  if (currentPath === "/accordion") {
    ComponentToShow = <AccordionPage />;
  } else if (currentPath === "/dropdown") {
    ComponentToShow = <DropDownPage />;
  } else if (currentPath === "/buttons") {
    ComponentToShow = <ButtonPage />;
  } else {
    ComponentToShow = <div>Home Page</div>;
  }

  return (
    <div>
      <nav style={{ marginBottom: "1rem" }}>
        <MyLink to="/accordion">Accordion</MyLink> |{" "}
        <MyLink to="/dropdown">Dropdown</MyLink> |{" "}
        <MyLink to="/buttons">Buttons</MyLink>
      </nav>
      <hr />
      {ComponentToShow}
    </div>
  );
};

export default MyRouterApp;
