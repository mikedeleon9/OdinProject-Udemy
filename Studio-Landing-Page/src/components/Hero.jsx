import mainLogo from "../images/logo.svg"
import heroLogo from "../images/desktop/image-grid.jpg"

export default function Hero(){
    const listItems = ["About", "Careers", "Events", "Products", "Support"];

    return(
        <section className="hero-section relative h-[95%] px-48 py-16">
            <div className="absolute inset-0 bg-black  opacity-40"></div>
            <div className="relative z-10  gap-36 flex flex-col">
                <header className="flex items-center justify-between">
                    <img src={mainLogo} alt="main-logo" />
                    <ul className="flex items-center gap-8 text-white">
                        {listItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </header>
                <div className="flex">
                        <p className="main-text text-6xl text-white border-2 border-white py-8 pl-8 pr-32">Immersive <br/> Experiences <br/> that deliver</p>
                        
                </div>
            </div>
        </section>
    )
}