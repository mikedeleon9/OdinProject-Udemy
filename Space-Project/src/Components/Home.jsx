import Header from "./Header"
import mainLogo from "../Images/shared/logo.svg"

export default function Home(){
    return (
        <main className="Home-Page-Main h-screen ">
            <section className="flex">
                <img className="z-10 " src={mainLogo} alt="" />
                <hr></hr>
                <Header />
            </section>
        </main>
    )
}