import Close_button from "../../components/button/Close_button"
import Id_badge from "../../components/id_badge/Id_badge"
import styles from "./Refill_methods.module.css"
const Refill_methods = () => {
  return (
    <div className={styles.refillWindow}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Пополнение</h3>
        <div className="d-flex justify-content-between align-items-center gap-2">
          <Id_badge id={337821} />
          <Close_button onClick={null} />
        </div>
      </div>
      
    </div>
  )
}

export default Refill_methods