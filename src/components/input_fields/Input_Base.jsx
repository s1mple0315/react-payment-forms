import styles from "./Input_Styles.module.css"

const Input_Base = ({title, isDisabled}) => {
  return (
    <div className={`${styles.inputBox} ${isDisabled ? styles.grey : ''}`}>
      <input type="text" placeholder="Data here....." disabled={true}/>
      <span>{title}</span>
    </div>
  );
};

export default Input_Base;
