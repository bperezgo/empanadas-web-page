import styles from './styles.module.scss';

type WpButtonTypes = {
  initialAnimation?: boolean;
  endAnimation?: boolean;
  options?: any;
};

export const WhatsappButton = ({ initialAnimation = true }: WpButtonTypes) => {
  return (
    <div className={styles.WpBtn__container}>
      <div className={styles.WpBtn__img_container}>
        {/* Image of next is not used here because wrong behaviour with animation */}
        <img
          className={[
            styles.WpBtn,
            initialAnimation ? styles.WpBtn__animation : '',
          ].join(' ')}
          src="/assets/wp-button.png"
          alt="wp-button"
        />
      </div>
    </div>
  );
};
