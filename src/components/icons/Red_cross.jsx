import styles from "./Icons.module.css";

const Red_cross = () => {
  return (
    <div className={styles.crossIconContainer}>
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9326 9.91737C11.3761 9.36088 10.4739 9.36088 9.91737 9.91737C9.36088 10.4739 9.36088 11.3761 9.91737 11.9326L16.9847 19L9.91737 26.0674C9.36088 26.6239 9.36088 27.5261 9.91737 28.0826C10.4739 28.6391 11.3761 28.6391 11.9326 28.0826L19 21.0153L26.0674 28.0826C26.6239 28.6391 27.5261 28.6391 28.0826 28.0826C28.6391 27.5261 28.6391 26.6239 28.0826 26.0674L21.0153 19L28.0826 11.9326C28.6391 11.3761 28.6391 10.4739 28.0826 9.91737C27.5261 9.36088 26.6239 9.36088 26.0674 9.91737L19 16.9847L11.9326 9.91737Z"
          fill="#F53764"
        />
      </svg>
    </div>
  );
};

export default Red_cross;
