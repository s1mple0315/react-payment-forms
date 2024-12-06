import styles from "./Input_Styles.module.css"

const Input_Base = ({title, isDisabled}) => {
  return (
    <div className={`${styles.inputBox} ${isDisabled ? styles.disabled : ''}`}>
      <input type="text" required="" placeholder="Write here....." disabled={isDisabled}/>
      <span>{title}</span>
    </div>
  );
};

export default Input_Base;
