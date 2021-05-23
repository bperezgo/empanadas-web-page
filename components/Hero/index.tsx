import styles from './styles.module.scss';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className={styles.Hero}>
      <Image
        src={'/assets/empanadas.jpg'}
        alt={'empanadas'}
        width={375}
        height={265}
      />
    </div>
  );
};
