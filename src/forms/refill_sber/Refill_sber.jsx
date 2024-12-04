import Success_custom from "../../components/alert/success_custom";
import Custom_Checkbox from "../../components/checkbox/Custom_Checkbox";
import Spinner from "../../components/loader/Spinner";
import Close_button from "../../components/button/Close_button";
import Id_badge from "../../components/id_badge/Id_badge";
import styles from "./Refill_sber.module.css";
import Countdown from "../../components/countdown/Countdown";
import Button from "../../components/button/button";
import Visa_light from "../../components/icons/visa/VIsa_light";
import Visa_dark from "../../components/icons/visa/Visa_dark";
import Animated_spinner from "../../components/loader/Animated_spinner";
import Vertical_Stepper from "../../components/stepper/Vertical_Stepper";

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
      <div
        className={`${styles.bottomContainer} d-flex align-items-center gap-3`}
      >
        <div className="d-flex align-items-center gap-2">
          <div>
            <Spinner />
            <div className={`${styles.countdownContainer}`}>
              <p>Мы ожидаем ваш платеж</p>
              <Countdown minutes={9} />
            </div>
          </div>
        </div>
        <Button text="Оплачено" onClick={null} />
      </div>

      <Visa_light />
      <Visa_dark />
      <Animated_spinner />
      <Vertical_Stepper />

    </div>
  );
};

export default Refill_sber;
