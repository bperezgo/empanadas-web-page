import styles from './styles.module.scss';
import Image from 'next/image';
import { Navbar } from '../Navbar';
import { useState } from 'react';

export const Hero = () => {
  const [navbarIsActive, setNavbarIsActive] = useState(false);
  const onHandleClick = () => {
    setNavbarIsActive(!navbarIsActive);
  };
  return (
    <div className={styles.Hero} onClick={onHandleClick}>
      <Navbar isActive={navbarIsActive} />
      <Image
        src={'/assets/empanadas.jpg'}
        alt={'empanadas'}
        width={375}
        height={265}
      />
    </div>
  );
};
