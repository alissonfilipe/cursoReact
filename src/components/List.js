import Item from "./Item"

function List(){
    return (
        <>
        <h1>Minha lista</h1>
        <ul>
            <Item marca= "ferrari" ano_lancamento={1987}/>
            <Item marca= "bugatti" ano_lancamento={1984}/>
            <Item/>
        </ul>
        </>
    )
}

export default List