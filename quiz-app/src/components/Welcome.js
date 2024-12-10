import react from "react"
import geographyPic from "../images/geography.png"
import sportsPic from "../images/basketball.png"
import historyPic from "../images/history.png"
import entertainmentPic from "../images/entertainment.png"

export default function WelcomePage(){
    return(
        <div className="bg-darkGray text-white h-screen flex">
            <div className="main-left border-2">
                <h1>Fun Trivia!</h1>
                <p>Pick a subject and get started.</p>
            </div>
            <div className="main-right border-2">
                <div className="Geography flex items-center">
                    <img src={geographyPic} className="w-12"></img>
                    <p>Geography</p>
                </div>
                <div className="Sports flex items-center">
                <img src={sportsPic} className="w-12" ></img>
                <p>Sports</p>
                </div>
                <div className="History flex items-center">
                <img src={historyPic} className="w-12" ></img>
                <p>History</p>
                </div>
                <div className="Entertainment flex items-center">
                <img src={entertainmentPic} className="w-12" ></img>
                <p>Entertainment</p>
                </div>
            </div>
        </div>
    )
}