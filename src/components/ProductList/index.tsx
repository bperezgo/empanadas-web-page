import styles from './styles.module.scss';
import { Product } from '../Product';

type ProductListProps = {
  products: TProduct[];
};

export const ProductList = ({ products = [] }: ProductListProps) => (
  <div className={styles.ProductList}>
    {products.map(({ id }) => (
      <Product key={id} />
    ))}
  </div>
);
