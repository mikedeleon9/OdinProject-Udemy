import brandRecognitionIcon from "../images/icon-brand-recognition.svg";
import detailedRecordsIcon from "../images/icon-detailed-records.svg";
import customizableIcons from "../images/icon-fully-customizable.svg"

export default function MiddleSection(){
    return(
        <div className="bg-indigo-100 100 h-full  flex flex-col items-center p-16 ">
            <div className="text-center p-16 flex flex-col gap-6 ">
                <h2 className="text-2xl font-bold">Advanced Statistics</h2>
                <p className="text-violetGray font-bold">Track how your links are performing across the web with an Advanced
                    statistics dashboard.
                </p>
            </div>
            
        <div className="flex gap-8 lg:mx-36 2xl:mx-64 h-3/4 relative ">
     
            <div className='flex  flex-col flex-wrap p-16 bg-white h-64 z-10 relative rounded-lg '>
                <div className="bg-VeryDarkViolet p-4 rounded-full absolute top-[-2rem] left-6">
                    <img className="" src={brandRecognitionIcon} alt="brand-icon"></img>
                </div>
                <h3>Brand Recognition</h3>
                <p className="">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.</p>
            </div>
            
            <div className='mt-6 p-16 bg-white h-64 z-10 relative rounded-lg flex flex-col'>
            <div className="bg-VeryDarkViolet p-4 rounded-full absolute top-[-2rem] left-6 ">
                    <img className="" src={detailedRecordsIcon} alt="brand-icon"></img>
                </div>
                
                <h3>Detailed Records</h3>
                <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </div>

            <div className='mt-16 p-16 bg-white h-64 z-10 relative rounded-lg'>
            <div className="bg-VeryDarkViolet p-4 rounded-full absolute top-[-2rem] left-6 ">
                    <img className="" src={customizableIcons} alt="brand-icon"></img>
                </div>
                <h3>Fully Customizable</h3>
                <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagements.</p>
            </div>

            <span className="border-2 border-teal h-2 bg-teal absolute w-1/2 top-40 right-60 z-1"></span>
        </div>
        </div>
    )
}