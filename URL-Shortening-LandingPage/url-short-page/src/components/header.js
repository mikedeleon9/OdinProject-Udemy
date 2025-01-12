import "../input.css"
import logo from "../images/logo.svg"

export default function Header(){
    return(
        <div>
            <div className="left-side">
                <img src={logo}></img>
            </div>
            <div className="right-side"></div>
        </div>
    )
}

