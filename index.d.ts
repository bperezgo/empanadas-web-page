type Url = string;
type TProductId = string;

type TProduct = {
  id: TProductId;
  sku: string;
  name: string;
  description: string;
  price: number;
  image: Url;
};
