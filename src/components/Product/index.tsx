import styles from './styles.module.scss';
import { ProductImage } from '../ProductImage';
import { ProductDescription } from '../ProductDescription';

export const Product = () => {
  return (
    <div className={styles.Product}>
      <ProductImage />
      <ProductDescription />
    </div>
  );
};
