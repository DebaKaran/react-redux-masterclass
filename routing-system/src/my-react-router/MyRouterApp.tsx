import AccordionPage from "../pages/AccordionPage";
import DropDownPage from "../pages/DropDownPage";
import ButtonPage from "../pages/ButtonPage";
import MyRoute from "./MyRoute";
import SideBar from "../components/SideBar";

const MyRouterApp = () => {
  return (
    <div>
      <SideBar />
      <hr />

      <MyRoute path="/accordion">
        <AccordionPage />
      </MyRoute>
      <MyRoute path="/">
        <DropDownPage />
      </MyRoute>
      <MyRoute path="/buttons">
        <ButtonPage />
      </MyRoute>
    </div>
  );
};

export default MyRouterApp;
