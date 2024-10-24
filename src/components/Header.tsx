import Nav from "./Nav";

function Header(propsObj: {color: string; userName: string; count: number}) {

    return (
        <header>
            <h3 style={{backgroundColor: propsObj.color}}>{propsObj.userName}</h3>

            <p>Header: {propsObj.count}</p>

            <Nav counterNum={propsObj.count}/>
        </header>
    )
}

export default Header;