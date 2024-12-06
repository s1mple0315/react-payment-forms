import Button from "../../components/button/Button";
import Close_button from "../../components/button/Close_button";
import Collapsible from "../../components/collapsible/Collapsible";
import Info_wavy from "../../components/icons/Info_wavy";
import Id_badge from "../../components/id_badge/Id_badge";
import Input_icon from "../../components/input_fields/Input_icon";
import Sber_card_qr from "../../components/sber_card_wrapper/Sber_card_qr";
import Vertical_stepper_v2 from "../../components/vertical_stepper/Vertical_stepper_v2";

import styles from "./Transfer.module.css";

const Transfer = () => {
  return (
    <div className={`${styles.refillWindow}`}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Перевод</h3>
        <div className="d-flex justify-content-between align-items-center gap-2">
          <Id_badge id={337821} />
          <Close_button onClick={null} />
        </div>
      </div>

      <div className="d-flex flex-column gap-2 mb-3">
        <Sber_card_qr />
        <Input_icon title="Номер платежа" />
      </div>

      <Collapsible icon={<Info_wavy />} title="Инструкция по оплате">
        <Vertical_stepper_v2 />
      </Collapsible>

      <div className={`${styles.paidContainer} d-flex flex-column text-center gap-2 mb-3`}>
        <p>Если вы совершили перевод, нажмите кнопку</p>
        <Button text="Я оплатил" />
        <strong>Обращаем ваше внимание, что перевести пономеру счета можно только из приложения Сбербанк</strong>
      </div>

      <div className={`${styles.cancelContainer} d-flex flex-column text-center gap-2`}>
        <p>Совершите перевод одним платежом на сумму $2000.В ином случае мы не сможем зачислить ваш платеж.</p>
        <Button text="Отменить" disabled={true} />
      </div>
    </div>
  );
};

export default Transfer;
