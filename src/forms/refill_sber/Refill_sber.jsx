import Success_custom from "../../components/alert/success_custom";
import Custom_Checkbox from "../../components/checkbox/Custom_Checkbox";
import Close_button from "../../components/button/Close_button";
import Id_badge from "../../components/id_badge/Id_badge";
import Countdown from "../../components/countdown/Countdown";
import Button from "../../components/button/button";
import Animated_spinner from "../../components/loader/Animated_spinner";
import Sber_card from "../../components/sber_card_wrapper/Sber_card";
import Input_Base_green from "../../components/input_fields/Input_Base_green";
import Info_circle_white from "../../components/icons/Info_circle_white";
import Success_darker from "../../components/alert/Success_darker";
import Input_icon_green from "../../components/input_fields/Input_icon_green";

import styles from "./Refill_sber.module.css";

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
        <div className="mb-4">
          <Success_darker
            icon={<Info_circle_white />}
            text="Скопируйте точную сумму, указанную в поле ниже. По этой сумме мы определим, что это ваш платеж и зачислим его автоматически."
          />
        </div>
        <div className="d-flex flex-column gap-3">
          <Input_icon_green title="Сумма для перевода" />
          <Input_icon_green title="Номер телефона для перевода" />
          <Input_Base_green title="Название банка для перевола" />
        </div>
      </Sber_card>

      <div className=" d-flex align-items-center gap-3 mb-3">
        <div className="d-flex justify-content-between align-items-center gap-2">
          <Animated_spinner />
          <div className={`${styles.countdownContainer}`}>
            <p>Мы ожидаем ваш платеж</p>
            <Countdown minutes={9} />
          </div>
        </div>
        <div className={`${styles.refillSberPaidButtonContainer}`}>
          <Button text="Оплачено" onClick={null} />
        </div>
      </div>
    </div>
  );
};

export default Refill_sber;
