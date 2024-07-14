export type TOrder = {
  name: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: "stripe" | "cashOnDelivery";
};
