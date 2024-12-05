import Button from "../button/Button";
import CountdownWithHours from "../countdown/CountDown_hours";
import Sber_light from "../icons/sber/Sber_light";
import QRCode from "react-qr-code";
import styles from "./Sber_card.module.css";

const Sber_card_qr = () => {
  return (
    <div
      className={`${styles.sberCardWrapper} d-flex justify-content-between align-items-center mb-3`}
    >
      <div className={`${styles.qrContainer}`}>
        <QRCode size={100} value="https://youtu.be/dQw4w9WgXcQ" />
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Sber_light /> <CountdownWithHours initialTimeInSeconds={3660} />
        </div>
        <div className="text-center text-white mb-2">
          Отсканируйте QR-Код или
        </div>
        <Button text="Открыть реквизиты" />
      </div>
    </div>
  );
};

export default Sber_card_qr;
