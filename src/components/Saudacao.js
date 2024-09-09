function Saudacao({ nome }) {

    function gerarSaudacao(algumNome) {
        return `Olá, ${nome}, tudo bem?`
    }

    return (
        <>{nome && <p>{gerarSaudacao(nome)}</p>}</>
    )
}

export default Saudacao