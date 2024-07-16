import { ReactNode } from "react";

export type TContactUs = {
  id: number;
  icon: () => ReactNode;
  title: string;
  value: string;
};
