import { useContext } from "react";
import ShoeContext from "../../ContextApi/shoe-context";


const HeaderCartButton = (props) => {
    const CartCtx = useContext(ShoeContext);
    
    let Quantity = 0;

    CartCtx.cartItems.forEach(item => Quantity++)

    
    return (
        <button>
            <span>Cart=</span>
            <span>{`(${Quantity})`}</span>
        </button>
    )
}

export default HeaderCartButton;