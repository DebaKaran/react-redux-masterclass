import { GoBell, GoDatabase, GoCloud } from "react-icons/go";
import Button from "../components/Buttons/Button";

const ButtonPage = () => {
  return (
    <>
      <Button
        buttonVariantProps={{ primary: true }}
        rounded
        outlined
        onClick={() => console.log("Clicked!")}
        className="mb-5"
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
};

export default ButtonPage;
