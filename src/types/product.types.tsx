export type TKeyboardBrand =
  | "Logitech"
  | "Razer"
  | "Corsair"
  | "SteelSeries"
  | "Microsoft"
  | "Apple"
  | "HyperX"
  | "Ducky"
  | "Cooler Master"
  | "Das Keyboard"
  | "Filco"
  | "Varmilo"
  | "Keychron"
  | "Anne Pro"
  | "Redragon";

export type TProduct = {
  _id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  quantity: number;
  description: string;
  brand: TKeyboardBrand;
  isDeleted?: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TFetchAllProductsProps = {
  data: { success: boolean; message: string; data: TProduct[] };
  isLoading?: boolean;
};

export type TProductSearchQuery = {
  searchTerm?: string;
  filter?: string;
  sort?: string;
  limit?: 5 | 10 | 15 | 20 | 30 | 40 | 50;
  page?: number;
};

export type TProductSearchQueryLimit = 5 | 10 | 15 | 20 | 30 | 40 | 50;
export const productSelectList: TProductSearchQueryLimit[] = [
  5, 10, 15, 20, 30, 40, 50,
];
