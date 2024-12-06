import Shopping_cart from "../../components/icons/Shopping_cart"
import styles from "./Button.module.css"

const Button_icon_red = ({text, onClick }) => {
  return (
    <button className={`${styles.buttonIconRed} d-flex align-items-center justify-content-center`} onClick={onClick}>
        <Shopping_cart />
        <p>{text}</p>
    </button>
  )
}

export default Button_icon_red