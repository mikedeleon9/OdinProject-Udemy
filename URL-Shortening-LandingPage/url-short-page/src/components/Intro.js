import desktopImage from '../images/illustration-working.svg'
import GetStartedButton from './getStartedButton'
import MiddleSearch from './middleSearch'

export default function Intro(){
    return(
        <div className=' mt-16 ml-36 2xl:mx-64 h-4/5 '>
            <div className="h-full flex items-center justify-between " 
               >
                <div className=" flex flex-col gap-4 justify-center " >
                    <h1 className="text-6xl font-bold">More than just shorter links</h1>
                    <p className='text-lg text-violetGray'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    <GetStartedButton />
                </div>
                <div className="w-full h-full bg-no-repeat bg-[center_right_-6rem] "  style={{backgroundImage: `url(${desktopImage})`}}
                 >
                
                </div>
                
            </div>
            <MiddleSearch></MiddleSearch>
        </div>
    )
}
