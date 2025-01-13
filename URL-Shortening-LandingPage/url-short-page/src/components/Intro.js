import desktopImage from '../images/illustration-working.svg'
import GetStartedButton from './getStartedButton'

export default function Intro(){
    return(
        <div className=' mt-16 mx-64'>
            <div className="flex items-center justify-between bg-no-repeat bg-right overflow-hidden" >
                <div className="" >
                    <h1 className="text-5xl font-bold">More than just shorter links</h1>
                    <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    <GetStartedButton />
                </div>
                <div className=''>
                <img className='ml-16' src={desktopImage} /> 
                </div>
                
            </div>
        </div>
    )
}
