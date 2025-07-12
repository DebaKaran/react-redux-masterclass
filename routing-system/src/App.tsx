import "./App.css";
import Button from "./components/Buttons/Button";
import "./index.css";

function App() {
  return (
    <>
      <Button buttonVariantProps={{ primary: true }} rounded>
        Tailwind Button
      </Button>
      <br />
      <Button buttonVariantProps={{ success: true }} rounded>
        Tailwind Button
      </Button>
    </>
  );
}

export default App;
