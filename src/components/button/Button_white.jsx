import styles from "./Button.module.css";

const Button_white = ({ text, onClick }) => {
  return (
    <button
      className={`${styles.buttonWhite} `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button_white;
