import styles from "./Success_custom.module.css";

const Success_darker = ({icon, text}) => {
  return (
    <div className={`${styles.success_darker} d-flex justify-content-between align-items-center mb-2`}>
      <div>{icon}</div>
      <span className="ms-2">{text}</span>
    </div>
  );
};

export default Success_darker;
