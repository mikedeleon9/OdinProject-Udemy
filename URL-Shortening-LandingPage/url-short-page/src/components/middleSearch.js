import purpleBackground from "../images/bg-shorten-desktop.svg"

export default function middleSearch(){
    return(
        <div className="flex gap-4 px-12 items-center justify-center rounded-lg bg-DarkViolet absolute bg-no-repeat bg-cover bottom-0 w-full min-h-32 relative top-[-60px]" style={{backgroundImage: `url(${purpleBackground})`}} >
           <input placeholder="Shorten a URL" className="p-3 rounded-lg w-4/5"></input>
           <button className="bg-teal p-3 rounded-lg px-8 ">Shorten It!</button>
        </div>
    )
}