import styles from './styles.module.scss';
import Image from 'next/image';
import { Navbar } from '../Navbar';
import { useState, useRef, forwardRef, ForwardedRef } from 'react';

export const Hero = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [navbarIsActive, setNavbarIsActive] = useState(false);
  const onHandleClick = () => {
    if (navRef.current && navbarIsActive) {
      navRef.current.classList.add(styles.Navbar__collapsed);
      navRef.current.classList.remove(styles.Navbar__expanded);
    } else if (navRef.current && !navbarIsActive) {
      navRef.current.classList.add(styles.Navbar__expanded);
      navRef.current.classList.remove(styles.Navbar__collapsed);
    }
    setNavbarIsActive(!navbarIsActive);
  };
  return (
    <div className={styles.Hero} onClick={onHandleClick}>
      <Navbar isActive={navbarIsActive} ref={navRef} />
      <Image
        src={'/assets/empanadas.jpg'}
        alt={'empanadas'}
        width={375}
        height={265}
      />
    </div>
  );
};
