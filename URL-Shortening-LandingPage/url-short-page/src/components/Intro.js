import desktopImage from '../images/illustration-working.svg'
import GetStartedButton from './getStartedButton'

export default function Intro(){
    return(
        <div className=' border-2 border-red-500'>
            <div className="border-2 flex items-center justify-between bg-no-repeat bg-right p-48" style={{backgroundImage : `url(${desktopImage})`}}>
                <div className="" >
                    <h1 className="text-5xl font-bold">More than just shorter links</h1>
                    <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    <GetStartedButton />
                </div>
                
            </div>
        </div>
    )
}
