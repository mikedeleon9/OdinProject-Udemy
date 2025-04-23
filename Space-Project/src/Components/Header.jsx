

export default function Header(){
    const categories = [
        { name: "Home", id: "00" },
        { name: "Destination", id: "01" },
        { name: "Crew", id: "02" },
        { name: "Technology", id: "03" }
      ];

    return(
        <header className="flex ">
            <ul className="flex">
            {categories.map(({name, id}) => (
                <li className="text-white flex" key={id}>
                    {id}{name}
                </li>
            ))}
            </ul>
        </header>
    )
}