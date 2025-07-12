import "./index.css";
import "./App.css";
import Button from "./components/Buttons/Button";
import { GoBell, GoDatabase, GoCloud } from "react-icons/go";

function App() {
  return (
    <>
      <Button
        buttonVariantProps={{ primary: true }}
        rounded
        outlined
        onClick={() => console.log("Clicked!")}
      >
        <GoBell />
        Clicked Me!!
      </Button>
      <br />
      <Button buttonVariantProps={{ danger: true }} outlined>
        <GoCloud />
        Buy Now
      </Button>
      <br />
      <Button buttonVariantProps={{ warning: true }}>See Deal</Button>
      <br />
      <Button buttonVariantProps={{ secondary: true }} outlined>
        <GoDatabase />
        Hide Ads!
      </Button>
      <br />
      <Button buttonVariantProps={{ success: true }} outlined rounded>
        Buy is successful!
      </Button>
    </>
  );
}

export default App;
