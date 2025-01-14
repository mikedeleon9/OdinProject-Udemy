export default function MiddleSection(){
    return(
        <div className="bg-slate-100 h-full flex flex-col items-center ">
            <div className="text-center">
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with an Advanced
                    statistics dashboard.
                </p>
            </div>
        <div className="flex gap-8 p-8 lg:mx-36 2xl:mx-64 border-2 h-3/4">
            <div className='p-8 bg-white h-64'>
                <h3>Brand Recognition</h3>
                <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.</p>
            </div>
            <div className='mt-6 p-8 bg-white h-64'>
                <h3>Detailed Records</h3>
                <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </div>
            <div className='mt-16 p-8 bg-white h-64'>
                <h3>Fully Customizable</h3>
                <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagements.</p>
            </div>
        </div>
        </div>
    )
}