import styles from "./Input_Styles.module.css"

const Input_Base_green = ({title}) => {
  return (
    <div className={`${styles.inputBoxGreen}`}>
      <input type="text" disabled={true} placeholder="Data here....."/>
      <span>{title}</span>
    </div>
  );
};

export default Input_Base_green;
