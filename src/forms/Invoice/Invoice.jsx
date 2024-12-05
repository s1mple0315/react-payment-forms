import Close_button from "../../components/button/Close_button";
import Input_icon from "../../components/input_fields/Input_icon";
import Countdown from "../../components/countdown/Countdown";
import Id_badge from "../../components/id_badge/Id_badge";
import Animated_spinner from "../../components/loader/Animated_spinner";
import Sber_card from "../../components/sber_card_wrapper/Sber_card";
import Shop from "../../components/icons/Shop";
import Wallet from "../../components/icons/Wallet";
import Button from "../../components/button/button";
import Collapsible from "../../components/collapsible/Collapsible";
import Vertical_stepper from "../../components/vertical_stepper/Vertical_stepper";
import Info_wavy from "../../components/icons/Info_wavy";
import styles from "./Invoice.module.css";

const Invoice = () => {
  return (
    <div className={`${styles.refillWindow}`}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Пополнение</h3>
        <div className="d-flex justify-content-between align-items-center gap-2">
          <Id_badge id={337821} />
          <Close_button onClick={null} />
        </div>
      </div>
      
      <div className="d-flex flex-column gap-3 mb-3">
        <Input_icon title="Сумма для перевода" />
        <div className="d-flex align-items-center gap-2">
          <Shop /> <strong>1win</strong> <p>https://1win.com</p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <Wallet />{" "}
          <strong>
            Оплатите <span>ровно 1000$ </span>одним переводом
          </strong>
        </div>
      </div>

      <Sber_card></Sber_card>

      <div className="row d-flex align-items-center gap-3 mb-3">
        <div className="col d-flex justify-content-between align-items-center gap-2">
          <Animated_spinner />
          <div className={`${styles.countdownContainer}`}>
            <p>Мы ожидаем ваш платеж</p>
            <Countdown minutes={9} />
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <Button text="Оплачено" onClick={null} />
        </div>
      </div>

    <Collapsible icon={<Info_wavy />} title="Инструкция по оплате">
        <Vertical_stepper />
    </Collapsible>

    </div>
  );
};

export default Invoice;
