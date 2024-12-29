import Button_green from "../../components/button/Button_green";
import Close_button from "../../components/button/Close_button";
import Info_circle_green from "../../components/icons/Info_circle_green";
import Tabs from "../../components/tabs/Tabs";
import Vertical_stepper_v3 from "../../components/vertical_stepper/Vertical_stepper_v3";
import styles from "./Instruction.module.css";

const Instruction = () => {
  return (
    <div className={`${styles.instruction} `}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center gap-2">
          <Info_circle_green />
          <p>Инструкция по оплате</p>
        </div>
        <Close_button />
      </div>
      <div
        className={`${styles.instructionContainer} d-flex flex-column gap-2 mb-3`}
      >
        <div className={`${styles.instructionTabsContainer}`}>
          <Tabs />
        </div>
        <div className={`${styles.instructionStepperContainer}`}>
          <Vertical_stepper_v3 />
        </div>
      </div>
      <Button_green />
    </div>
  );
};

export default Instruction;
