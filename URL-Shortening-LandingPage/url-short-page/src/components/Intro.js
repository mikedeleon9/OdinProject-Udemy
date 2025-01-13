import desktopImage from '../images/illustration-working.svg'
import GetStartedButton from './getStartedButton'

export default function Intro(){
    return(
        <div className=' mt-16 mx-64 '>
            <div className="ml-8 flex items-center justify-between bg-no-repeat bg-right overflow-hidden" >
                <div className=" flex flex-col gap-4 justify-center" >
                    <h1 className="text-6xl font-bold">More than just shorter links</h1>
                    <p className='text-lg text-violetGray'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    <GetStartedButton />
                </div>
                <div className=''>
                <img className='ml-16' src={desktopImage} alt="desktop-image" /> 
                </div>
                
            </div>
        </div>
    )
}
