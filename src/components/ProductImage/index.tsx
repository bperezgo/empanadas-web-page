import styles from './styles.module.scss';
import Image from 'next/image';

export const ProductImage = () => (
  <div className={styles.ProductImage}>
    <Image
      src="/assets/empanadas.jpg"
      alt="image-product"
      width={104}
      height={104}
    />
  </div>
);
