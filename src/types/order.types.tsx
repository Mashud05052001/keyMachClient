export type TOrder = {
  Name: string;
  Email: string;
  Phone: string;
  Address: string;
  paymentMethod: "stripe" | "cashOnDelivery";
};
