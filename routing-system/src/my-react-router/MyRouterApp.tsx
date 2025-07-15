import AccordionPage from "../pages/AccordionPage";
import DropDownPage from "../pages/DropDownPage";
import ButtonPage from "../pages/ButtonPage";
import MyLink from "./MyLink";
import MyRoute from "./MyRoute";

const MyRouterApp = () => {
  return (
    <div>
      <nav style={{ marginBottom: "1rem" }}>
        <MyLink to="/accordion">Accordion</MyLink> |{" "}
        <MyLink to="/dropdown">Dropdown</MyLink> |{" "}
        <MyLink to="/buttons">Buttons</MyLink>
      </nav>
      <hr />

      <MyRoute path="/accordion">
        <AccordionPage />
      </MyRoute>
      <MyRoute path="/dropdown">
        <DropDownPage />
      </MyRoute>
      <MyRoute path="/buttons">
        <ButtonPage />
      </MyRoute>
      <MyRoute path="/">
        <div>Home Page</div>
      </MyRoute>
    </div>
  );
};

export default MyRouterApp;
