import Nav from "./Nav";

function Header() {

    return (
        <header>
            <div className="logo">
                <img src="/images/dino.png" alt="Dino Logo" />
            <h3>City Smith</h3>
            </div>


            <Nav />
        </header>
    )
}

export default Header;