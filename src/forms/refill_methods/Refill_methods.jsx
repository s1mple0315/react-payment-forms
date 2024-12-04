import Button from "../../components/button/button";
import Close_button from "../../components/button/Close_button";
import Card from "../../components/icons/card";
import Spb from "../../components/icons/Spb";
import Check from "../../components/icons/Check";
import Id_badge from "../../components/id_badge/Id_badge";
import Input_icon from "../../components/input_fields/Input_icon";
import Method from "../../components/payment_method/method";
import styles from "./Refill_methods.module.css";

const Refill_methods = () => {
  return (
    <div className={styles.refillWindow}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Пополнение</h3>
        <div className="d-flex justify-content-between align-items-center gap-2">
          <Id_badge id={337821} />
          <Close_button onClick={null} />
        </div>
      </div>
      <div className="d-flex flex-column gap-3 mb-3">
        <Method
          title="Номер карты"
          text="Данный способ придпочтителен тем что, это просторыбный текст для заполнения двух строк в этом блоке."
          icon={<Card />}
        />
        <Method
          title="СПБ"
          text="Данный способ придпочтителен тем что, это просторыбный текст для заполнения двух строк в этом блоке."
          icon={<Spb />}
        />
        <Method
          title="Номер счета"
          text="Данный способ придпочтителен тем что, это просторыбный текст для заполнения двух строк в этом блоке."
          icon={<Check />}
        />
        <Input_icon title="Сумма для перевода" onClickIcon={null} />
      </div>
      <div className="d-flex flex-column gap-4">
        <div className={styles.captcha}>{/* Placeholder for captcha */}</div>
        <Button text="Продолжить" />
      </div>
    </div>
  );
};

export default Refill_methods;
