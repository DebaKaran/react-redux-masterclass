import AccordionPage from "../pages/AccordionPage";
import DropDownPage from "../pages/DropDownPage";
import ButtonPage from "../pages/ButtonPage";
import MyRoute from "./MyRoute";
import SideBar from "../components/SideBar";

const MyRouterApp = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <div className="col-span-1">
        <SideBar />
      </div>

      <div className="col-span-5">
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
    </div>
  );
};

export default MyRouterApp;
