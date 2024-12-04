import styles from "./Success_custom.module.css"

const Success_custom = ({text, icon}) => {
  return (
    <div className={`${styles.success_custom} d-flex align-items-center`}>
        {icon}
        <span className="ms-2">{text}</span>
    </div>
  )
}

export default Success_custom