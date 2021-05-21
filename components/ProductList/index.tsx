import { Product } from '../Product';
import styles from './ProductList.module.scss';

export const ProductList = () => (
  <div className={styles.ProductList}>
    {[1, 2, 3, 4, 5, 6].map((key) => (
      <Product key={key} />
    ))}
  </div>
);
