import { useState } from "react";
import styles from "./Tabs.module.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${
            activeTab === "Tab1" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabClick("Tab1")}
        >
          Сбербанк
        </div>
        <div
          className={`${styles.tab} ${
            activeTab === "Tab2" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabClick("Tab2")}
        >
          T-Банк
        </div>
        <div
          className={`${styles.tab} ${
            activeTab === "Tab3" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabClick("Tab3")}
        >
          Альфа
        </div>
        <div
          className={`${styles.tab} ${
            activeTab === "Tab4" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabClick("Tab4")}
        >
          ВТБ
        </div>
      </div>
    </div>
  );
};

export default Tabs;
