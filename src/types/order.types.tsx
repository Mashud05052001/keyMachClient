export type TOrder = {
  name: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: "stripe" | "cashOnDelivery";
};

export type TAccordian = {
  id: number;
  question: string;
  answer: string;
};
