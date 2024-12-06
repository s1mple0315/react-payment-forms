import Button_icon from "../../components/button/Button_icon";
import Close_button from "../../components/button/Close_button";
import Green_check from "../../components/icons/Green_check";

import styles from "./Success_modal.module.css";

const Success_modal = ({cash}) => {
  return (
    <div className={`${styles.successModal} d-flex flex-column`}>
      <div className={`${styles.modalHeader} position-relative`}>
        <Close_button onClick={null} />
      </div>
      <div className="d-flex flex-column align-items-center gap-3">
        <Green_check />
        <div className={`${styles.modalText} d-flex flex-column gap-1 mb-2`}>
          <h3>Счет оплачен</h3>
          <p>Платеж зачислен</p>
        </div>
        <div className={styles.modalCash}>
            <p>+ {cash}$</p>
        </div>
        <Button_icon text="На сайт магазина"/>
      </div>
    </div>
  );
};

export default Success_modal;
