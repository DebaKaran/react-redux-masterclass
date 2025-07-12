import "./index.css";
import "./App.css";
import Button from "./components/Buttons/Button";

function App() {
  return (
    <>
      <div className="bg-blue-500 text-white text-xl p-4">
        Tailwind is working?
      </div>
      <div className="bg-blue-500 text-white p-4">Tailwind Working?</div>

      <Button buttonVariantProps={{ primary: true }} rounded outlined>
        Clicked Me!!
      </Button>
      <br />
      <Button buttonVariantProps={{ danger: true }} outlined>
        Buy Now
      </Button>
      <br />
      <Button buttonVariantProps={{ warning: true }}>See Deal</Button>
      <br />
      <Button buttonVariantProps={{ secondary: true }} outlined>
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
