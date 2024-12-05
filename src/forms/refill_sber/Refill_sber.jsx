import Success_custom from "../../components/alert/success_custom";
import Custom_Checkbox from "../../components/checkbox/Custom_Checkbox";
import Close_button from "../../components/button/Close_button";
import Id_badge from "../../components/id_badge/Id_badge";
import styles from "./Refill_sber.module.css";
import Countdown from "../../components/countdown/Countdown";
import Button from "../../components/button/button";
import Animated_spinner from "../../components/loader/Animated_spinner";
import Sber_card from "../../components/sber_card_wrapper/Sber_card";
import Input_icon from "../../components/input_fields/Input_icon";
import Input_Base from "../../components/input_fields/Input_Base";
import Vertical_stepper from "../../components/vertical_stepper/Vertical_stepper";

const Refill_sber = () => {
  return (
    <div className={`${styles.refillWindow}`}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Пополнение</h3>
        <div className="d-flex justify-content-between align-items-center gap-2">
          <Id_badge id={337821} />
          <Close_button onClick={null} />
        </div>
      </div>
      <Success_custom
        icon={<Custom_Checkbox />}
        text="Запрос успешно принят. Сделайте переводуказанной суммы по номеру телефона."
      />
      <Sber_card>
        <div>
          
        </div>
        <div className="d-flex flex-column gap-3">
          <Input_icon title="Сумма для перевода"/>
          <Input_icon title="Номер телефона для перевода"/>
          <Input_Base title="Название банка для перевола"/>
        </div>
      </Sber_card>
      <div
        className={`${styles.bottomContainer} d-flex align-items-center gap-3`}
      >
        <div className="d-flex align-items-center gap-2">
          <div>
            <Animated_spinner />
            <div className={`${styles.countdownContainer}`}>
              <p>Мы ожидаем ваш платеж</p>
              <Countdown minutes={9} />
            </div>
          </div>
        </div>
        <Button text="Оплачено" onClick={null} />
      </div>

      <Vertical_stepper />
    </div>
  );
};

export default Refill_sber;
