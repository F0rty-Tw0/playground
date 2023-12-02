export type Car = {
  brand: string;
  price: number;
  color: string;
  model?: string;
  year?: number;
  id?: string;
  soldState?: boolean;
  [key: string]: string | number | boolean | undefined;
};
