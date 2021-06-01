import styles from './styles.module.scss';
import { Product } from '../Product';

type ProductListProps = {
  products: TProduct[];
};

export const ProductList = ({ products = [] }: ProductListProps) => (
  <div className={styles.ProductList}>
    {[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }].map(({ id }) => (
      <Product key={id} />
    ))}
  </div>
);
