import VRImage from "../images/desktop/image-interactive.jpg"

export default function VRComponent(){
    return(
        <div className="px-48 py-32 ">
            <div className="relative">
                <img className="" src={VRImage} alt="" />
                <div className="absolute bottom-0 bg-white w-[500px] right-0 h-3/5 border-2">
                    <h3 className="text-2xl">The Leader in Interactive VR</h3>
                    <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
                </div>
            </div>
        </div>
    )
}