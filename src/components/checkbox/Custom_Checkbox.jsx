import styles from "./Checkbox.module.css"

const Custom_Checkbox = () => {
  return (
    <label className={`${styles.checkboxContainer}`}>
      <input className={`${styles.customCheckbox}`} type="checkbox" defaultChecked />
      <span className={`${styles.checkmark}`}></span>
    </label>
  );
};

export default Custom_Checkbox;
