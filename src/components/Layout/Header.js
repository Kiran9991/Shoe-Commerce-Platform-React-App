import { Fragment } from "react"
import HeaderCartButton from "./HeaderCartButton";



const Header = (props) => {
    return (
        <Fragment>
            <header>
                <h3>Shoe Commerce Plateform</h3>
                <HeaderCartButton/>
            </header>
        </Fragment>
    )
}

export default Header;