import styles from './Checkbox.module.css';

const Checkbox = () => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.checkBoxContainer}>
        <input defaultChecked="checked" type="checkbox" />
        <div className={styles.checkmark} />
      </label>
    </div>
  );
}

export default Checkbox;
