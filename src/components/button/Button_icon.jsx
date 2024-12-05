import Shopping_cart from "../../components/icons/Shopping_cart"
import styles from "./Button.module.css"

const Button_icon = ({text, onClick }) => {
  return (
    <button className={`${styles.button}`} onClick={onClick}>
        <Shopping_cart />
        {text}
    </button>
  )
}

export default Button_icon