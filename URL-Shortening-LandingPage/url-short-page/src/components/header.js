import "../input.css"
import logo from "../images/logo.svg"

export default function Header(){
    return(
        <div>
            <div className="left-side">
                <img src={logo}></img>
                <ul>
                    <li className="text-red-500">Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>
            </div>
            <div className="right-side"></div>
        </div>
    )
}

