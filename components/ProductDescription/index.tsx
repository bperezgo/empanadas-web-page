import styles from './styles.module.scss';

export const ProductDescription = () => (
  <div className={styles.ProductDescription}>
    <div className={styles.ProductDescription__title}>Title of Product</div>
    <div className={styles.ProductDescription__description}>
      Description waou of this amazing product
    </div>
    <div className={styles.ProductDescription__price}>$ 2.000</div>
  </div>
);
