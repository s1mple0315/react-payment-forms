import { useState } from "react";
import Button from "../../components/button/button";
import Close_button from "../../components/button/Close_button";
import Id_badge from "../../components/id_badge/Id_badge";
import Input_Base from "../../components/input_fields/Input_Base";
import styles from "./Refill.module.css";
import Input_left_icon from "../../components/input_fields/Input_left_icon";
import Spb from "../../components/icons/Spb";
import Captcha from "../../components/turnstile_captcha/Captcha";

const Refill_initial = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleInputChange = () => {
    setIsButtonDisabled(false);
  };

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
        <Input_Base
          title="Сумма для перевода"
          onChange={handleInputChange} 
          // isDisabled={true}
        />
        <Input_Base
          title="Название магазина"
          onChange={handleInputChange} 
        />
        <Input_left_icon
          icon={<Spb />}
          title="Метод оплаты"
          onChange={handleInputChange} 
        />
      </div>
      <div className="d-flex flex-column gap-3">
          <Captcha />
        
        <Button text="Получить реквизиты" disabled={isButtonDisabled} />
      </div>
    </div>
  );
};

export default Refill_initial;
