import { TAccordian } from "@/types/order.types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

type TCommonAccordianProps = {
  accordianData: TAccordian[];
  className?: string;
};

const CommonAccordian = ({ accordianData }: TCommonAccordianProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full rounded-md shadow border-b-2 border-r-2 border-gray-300/50"
    >
      {accordianData?.map((item) => (
        <AccordionItem
          key={item.id}
          value={`item-${item.id}`}
          className=" pl-5 hover:bg-gray-200 duration-100 rounded-md pr-3"
        >
          <AccordionTrigger className="cursor-pointer hover:no-underline text-left">
            {item.question}
          </AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CommonAccordian;
