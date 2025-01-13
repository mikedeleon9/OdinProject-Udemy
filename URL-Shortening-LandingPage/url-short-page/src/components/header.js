import "../input.css"
import logo from '../images/logo.svg'

export default function Header(){
    return(
        <div className="flex justify-between items-center">
            <div className="left-side flex gap-8">
                <img src={logo}></img>
                <ul className="flex items-center gap-8">
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>
            </div>
            <div className="right-side flex items-center gap-8">
                <p>Login</p>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

