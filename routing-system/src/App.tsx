import "./index.css";
import "./App.css";

import Accordion from "./components/Accordion";

const App = () => {
  const items = [
    {
      label: "What is React?",
      content:
        "React is a JS library for building UIs. You can use react on any project you want. You can use react on any project you want.",
    },
    {
      label: "Why use React?",
      content:
        "React makes building UIs easier and more modular. You can use react on any project you want. You can use react on any project you want.",
    },
    {
      label: "How does React work?",
      content:
        "React creates a virtual DOM and syncs it efficiently with the real DOM. You can use react on any project you want. You can use react on any project you want.",
    },
  ];
  return (
    <>
      <Accordion items={items} />
    </>
  );
};

export default App;
