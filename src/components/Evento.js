import Button from "./evento/Button"

function Evento() {

    function meuEvento() {

        console.log(`Ativando o primeiro evento`)
    }

    function segundoEvento() {
        console.log(`meu segundo eventos`)
    }

    return (
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text='primeiro evento' />
            <Button event={segundoEvento} text='segundo evento' />

        </div>
    )
}

export default Evento