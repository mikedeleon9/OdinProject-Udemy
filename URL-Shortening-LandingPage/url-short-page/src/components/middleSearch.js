import purpleBackground from "../images/bg-shorten-desktop.svg"

export default function middleSearch(){
    return(
        <div className="flex px-8 items-center justify-center rounded-lg bg-DarkViolet absolute bg-no-repeat bg-cover bottom-0 w-full min-h-32 relative top-[-60px]" style={{backgroundImage: `url(${purpleBackground})`}} >
           <input className=""></input>
           <button className="bg-teal">Shorten It!</button>
        </div>
    )
}