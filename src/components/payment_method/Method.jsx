import Custom_Checkbox from "../checkbox/Custom_Checkbox";
import Card from "../icons/card";
import styles from "./Method.module.css";

const Method = ({ title, text, icon }) => {
  return (
    <div className={`${styles.methodContainer} d-flex flex-column`}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="d-flex justify-content-between align-items-center">
          {icon}
          <span className="ms-2">{title}</span>
        </div>
        <Custom_Checkbox />
      </div>
      <div className="text-start">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Method;
