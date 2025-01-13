import desktopImage from '../images/illustration-working.svg'

export default function Intro(){
    return(
        <div>
            <div className="flex">
                <div className="">
                    <h1>More than just shorter links</h1>
                    <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    
                </div>
                <img src={desktopImage}></img>
            </div>
        </div>
    )
}
