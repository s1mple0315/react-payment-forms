import Close_button from "../../components/button/Close_button";
import Countdown from "../../components/countdown/Countdown";
import Button from "../../components/button/button";
import Animated_spinner from "../../components/loader/Animated_spinner";
import Sber_card_disabled from "../../components/sber_card_wrapper/Sber_card_disabled";
import Info_circle from "../../components/icons/Info_circle";
import Input_icon from "../../components/input_fields/Input_icon";
import Input_Base from "../../components/input_fields/Input_Base";
import Success_white from "../../components/alert/Success_white";

import styles from "./Refill_sber.module.css";
import Wallet from "../../components/icons/Wallet";

const Refill_sber_disabled = () => {
  return (
    <div className={`${styles.refillWindow}`}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex justify-content-between  gap-3">
          <Wallet />
          <h3>Пополнение</h3>
        </div>
        <div className="d-flex justify-content-between align-items-center gap-2">
          <Close_button onClick={null} />
        </div>
      </div>
      <Sber_card_disabled>
        <div className="mb-4">
          <Success_white
            icon={<Info_circle />}
            text="Скопируйте точную сумму, указанную в поле ниже. По этой сумме мы определим, что это ваш платеж и зачислим его автоматически."
          />
        </div>
        <div className="d-flex flex-column gap-3">
          <Input_icon title="Сумма для перевода" isDisabled={true} />
          <Input_Base title="Название банка для перевола" isDisabled={true} />
          <Input_icon title="ID заявки" isDisabled={true} />
          <Input_Base title="Статус платежа" isDisabled={true} />
        </div>
      </Sber_card_disabled>

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

export default Refill_sber_disabled;
