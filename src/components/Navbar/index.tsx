import { ForwardedRef, forwardRef } from 'react';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineCaretUp } from 'react-icons/ai';
import Image from 'next/image';
import styles from './styles.module.scss';

type NavbarProps = {
  isActive: boolean;
};

export const Navbar = forwardRef(
  ({ isActive }: NavbarProps, navRef: ForwardedRef<HTMLDivElement | null>) => (
    <div
      ref={navRef}
      className={[
        styles.Navbar,
      ].join(' ')}
    >
      {isActive && (
        <>
          <div className={styles.Navbar__image_extended}>
            <Image
              src="/assets/negrita-logo.png"
              alt="empanaditas-logo"
              width={250}
              height={120}
            />
          </div>
          <div className={styles.Navbar__contact}>
            <p>Contacto: 300 000 0000</p>
          </div>
        </>
      )}
      <div className={styles.Navbar__menu_icon}>
        {isActive ? <AiOutlineCaretUp /> : <BiMenu />}
      </div>
    </div>
  )
);
