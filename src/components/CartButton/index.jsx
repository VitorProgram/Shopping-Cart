import { CartButtonElement, CartCounter } from "./CartButton.style"
import { FaShoppingCart } from "react-icons/fa";

function CartButton () {
    return (
        <CartButtonElement type="button">
            <FaShoppingCart />

            <CartCounter>1</CartCounter>
        </CartButtonElement>
    )
}

export default CartButton