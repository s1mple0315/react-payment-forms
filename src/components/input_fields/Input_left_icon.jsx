import styles from "./Input_Styles.module.css";

const Input_left_icon = ({ title, icon, onClickIcon, isDisabled }) => {
  return (
    <div className={`${styles.inputBox} ${isDisabled ? styles.disabled : ""}`}>
      <div className={`${styles.inputLeftIcon} position-absolute`}>{icon}</div>
      <input
        className={`${styles.inputWithLeftIcon}`}
        type="text" 
        placeholder="Data here....."
        disabled={true}
      />
      <span>{title}</span>
    </div>
  );
};

export default Input_left_icon;
