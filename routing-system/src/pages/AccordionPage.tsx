import Accordion from "../components/Accordion";
import { accordionItems } from "../data/accordionItems";

const AccordionPage = () => {
  return (
    <div>
      <Accordion items={accordionItems} />
    </div>
  );
};

export default AccordionPage;
