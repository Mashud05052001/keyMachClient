import { SelectItem } from "@/components/ui/select";
import { productSelectList } from "@/types/product.types";

export const generateSelectGroup = (totalData: number) => {
  const selectItems = [];
  for (let i = 0; i < productSelectList.length; i++) {
    const value = productSelectList[i];
    if (value <= totalData) {
      selectItems.push(
        <SelectItem value={`${value}`} key={value}>
          {value}
        </SelectItem>
      );
    } else break;
  }
  return selectItems;
};
