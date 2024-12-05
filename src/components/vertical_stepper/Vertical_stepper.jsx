import styles from "./Vertical_stepper.module.css";

const Vertical_stepper = () => {
  return (
    <ol  className={styles.stepper}>
      <li className={styles.stepperItem}>
        <div className={styles.stepperContent}>
          <h3 className={styles.stepperTitle}>
            Откройте приложение онлайн-банка
          </h3>
          <p>
            Откройте приложение своего онлайн-банка, перейдите в раздел Переводы
            с карты на карту
          </p>
        </div>
      </li>
      <li className={styles.stepperItem}>
        <div className={styles.stepperContent}>
          <h3 className={styles.stepperTitle}>
            Скопируйте и вставьте номер карты
          </h3>
          <p>Some desc text</p>
        </div>
      </li>
      <li className={styles.stepperItem}>
        <div className={styles.stepperContent}>
          <h3 className={styles.stepperTitle}>Укажите точную сумму перевода</h3>
          <p>
            Переводите ровно ту сумму, которая указанав противном случае платеж
            не будет зачислен только после проверки перевода
          </p>
        </div>
      </li>
      <li className={styles.stepperItem}>
        <div className={styles.stepperContent}>
          <h3 className={styles.stepperTitle}>Совершите перевод и нажмите на кнопку</h3>
          <p>После совершения перевода нажмите на кнопку Я оплатил, чтобы система начала поиск вашего платежа</p>
        </div>
      </li>
    </ol>
  );
};

export default Vertical_stepper;
