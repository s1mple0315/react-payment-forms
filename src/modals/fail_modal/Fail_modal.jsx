import Button from "../../components/button/button";
import Button_icon from "../../components/button/Button_icon";
import Button_icon_red from "../../components/button/Button_icon_red";
import Close_button from "../../components/button/Close_button";
import Red_cross from "../../components/icons/Red_cross";
import styles from "./Fail_modal.module.css";

const Fail_modal = ({ cash }) => {
  return (
    <div className={`${styles.failModal} d-flex flex-column`}>
      <div className={`${styles.modalHeader} position-relative`}>
        <Close_button onClick={null} />
      </div>
      <div className="d-flex flex-column align-items-center gap-3">
        <Red_cross />
        <div className={`${styles.modalText} d-flex flex-column gap-1 mb-2`}>
          <h3>Счет оплачен</h3>
          <p>Платеж зачислен</p>
        </div>
        <div className={styles.modalCash}>
          <p>{cash}$</p>
        </div>
        
          <Button_icon_red text="На сайт магазина" />
          <Button_icon disabled={true} text="На карту" />
        
      </div>
    </div>
  );
};

export default Fail_modal;
