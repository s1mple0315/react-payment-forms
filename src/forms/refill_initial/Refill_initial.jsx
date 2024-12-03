import Button from "../../components/button/button";
import Close_button from "../../components/button/Close_button";
import Id_badge from "../../components/id_badge/Id_badge";
import Input_Base from "../../components/input_fields/Input_Base";
import styles from "./Refill.module.css";
const Refill_initial = () => {
  return (
    <div className={styles.refillWindow}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Пополнение</h3>
        <div className="d-flex justify-content-between align-items-center gap-2">
          <Id_badge id={337821} />
          <Close_button onClick={null} />
        </div>
      </div>
      <div className="d-flex flex-column gap-4 mb-3">
        <Input_Base title="Сумма для перевода" />
        <Input_Base title="Название магазина" />
        <Input_Base title="Метод оплаты" />
      </div>
      <div className="d-flex flex-column gap-4">
        <div className={styles.captcha}>
          {/* Placeholder for captcha */}
        </div>
        <Button text="Получить реквизиты" />
      </div>
    </div>
  );
};

export default Refill_initial;
