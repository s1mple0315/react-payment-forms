import styles from "./Badge.module.css"

const Id_badge = ({id}) => {
  return (
    <div className={`${styles.badge} d-flex align-items-center `}>
        <span>ID: #{id}</span>
    </div>
  )
}

export default Id_badge