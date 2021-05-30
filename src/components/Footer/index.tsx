import styles from './styles.module.scss';

type FooterType = {
  info?: object;
};

export const Footer = ({ info = {} }: FooterType) => (
  <div className={styles.Footer__container}>Footer</div>
);
