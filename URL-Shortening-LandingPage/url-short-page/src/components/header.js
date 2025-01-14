import "../input.css"
import logo from '../images/logo.svg'

export default function Header(){
    return(
        <div className="flex justify-between items-center lg:mx-36 2xl:mx-64">
            <div className="left-side flex gap-8">
                <img src={logo} alt="logo"></img>
                <ul className="flex items-center gap-8 text-violetGray">
                    <li className="font-medium">Features</li>
                    <li className="font-medium">Pricing</li>
                    <li className="font-medium">Resources</li>
                </ul>
            </div>
            <div className="right-side flex items-center gap-8">
                <p className="font-medium text-violetGray">Login</p>
                <button className="bg-teal text-white px-4 py-2 rounded-full">Sign Up</button>
            </div>
        </div>
    )
}

