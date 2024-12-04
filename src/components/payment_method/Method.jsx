import Custom_Checkbox from "../checkbox/Custom_Checkbox";
import Card from "../icons/card";
import styles from "./Method.module.css";

const Method = ({ title }) => {
  return (
    <div className={`${styles.methodContainer} d-flex flex-column`}>
      <div>
        <div className="d-flex">
          <Card />  
          <span>{title}</span>
        </div>
        <Custom_Checkbox />
      </div>
      <div></div>
    </div>
  );
};

export default Method;
