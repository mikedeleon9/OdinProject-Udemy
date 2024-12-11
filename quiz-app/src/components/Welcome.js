import react from "react"
import geographyPic from "../images/geography.png"
import sportsPic from "../images/basketball.png"
import historyPic from "../images/history.png"
import entertainmentPic from "../images/entertainment.png"
import Category from "./Category"
import Questions from "./Questions"

export default function WelcomePage(){
    return(
        <div className="bg-darkGray text-white h-screen flex  ">
            <div className="main-left w-full flex flex-col items-center justify-center">
                <h1 className="text-5xl">Fun Trivia!</h1>
                <p className="text-xl">Pick a subject and get started.</p>
            </div>
            <div className=" flex flex-col items-center justify-center w-full gap-6">
                    <Category imgSrc={geographyPic} type={"Geography"} />
                    <Category imgSrc={sportsPic} type={"Sports"} />
                    <Category imgSrc={historyPic} type={"History"} />
                    <Category imgSrc={entertainmentPic} type={"Entertainment"} />
            </div>
            <Questions />
        </div>
    )
}