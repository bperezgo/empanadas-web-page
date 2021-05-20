import { Product } from '../Product';

export const ProductList = () => (
  <div>
    {[1, 2, 3].map((key) => (
      <Product key={key} />
    ))}
  </div>
);
