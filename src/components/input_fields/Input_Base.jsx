import styles from "./Input_Styles.module.css"

const Input_Base = ({title}) => {
  return (
    <div className={`${styles.inputBox}`}>
      <input type="text" required="" placeholder="Write here....."/>
      <span>{title}</span>
    </div>
  );
};

export default Input_Base;
