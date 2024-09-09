# anotações
- npm install --> baixar as dependências do projeto
- npm start --> rodar a aplicação
- quando eu coloquei o endereço da imagem seguido de uma /150 não funcionou
- mas quando eu coloquei o endereço da imagem apenas, funcionou
- no JSX todos os elementos precisam estar na classe pai
- class -> é uma palavra reservada do react e usando `className`
- `<div className="App">`
- Trabalhar com componentes comece com letras maiúsculas 
- cada componente tendo o seu arquivo e cada arquivo sendo exportado
- cada componente pode ser reutilizado
- atalho crl - D para selecionar vários elementos iguais 

# aulas
- `aula 3` entendendo o JSX
- `aula 4` criando os componentes
- `aula 5` trabalhando com props
- `aula 6` inserindo CSS no React
- `aula 7` Utilizando React Fragments
- `aula 8` props
- `aula 9` Eventos
- `aula 10` use State
- `aula 11` eventos por props
- `aula 12` Renderização condicional
- `aula 13` Renderização de listas
- `aula 14` State Lift
- `auila 15` React Router

<hr/>

- `aula 5` trabalhando com props
    - props são somente leitura
    - `<SayMyName nome="matheus"/>` forma de imprimir um valor
    - em seguida a forma de declarar 
    ```javascript
    function SayMyName(props){

    return (
        <div>
            <p>fala aí {props.nome}, tranks?</p>
        </div>
    )
    }
    ```
    - nessa aula tivemos o reaproveitamento mais a parte dinâmica
    - `<SayMyName nome={nome} />` forma de pegar valores de variáveis
    - tivemos um componente bem mais complexo
    - nessa mesma aula é ensinado que não precisa usar props
    - faz uma desestruturação
    - basicamente assim
        ```javascript
       function Pessoa({ nome, idade, profissao, foto}) {
        return (
        <div>
            <img src={foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
            )
        }
    ```
    - nessa foi foi finalizada com a desetruturação

- `aula 6` inserindo CSS no React
    - o CSS pode ser adicionado de forma global na aplicação
    - `Frase.module.css` é a declaração dos estilos de um módulo
    - vamos ver como funciona isso
    ```CSS
        .fraseContainer {
    background-color: #333;
    border: 1px solid #111;
    }

    .fraseContent {
        color: #fff;
        background-color: #333;
        margin: 0;
    }
    ```
    - e essa é a forma de utilizar ele
    - que é importando ele
    - o padrão é styles

    ```javascript
    import styles from './Frase.module.css'

    function Frase(){
        return (
            <div className={styles.fraseContainer}>
                <p className={styles.fraseContent}>Este componente é uma frase</p>
            </div>
        )
    }

    export default Frase
    ```
    - não funciona assimno css `nome-sobrenome`
    - use sempre `fraseContainer`


- `aula 7` Utilizando React Fragments
    - a sintaxe é uma tag vazia
    - criamos no prórpio jsx
    - o fragment é uma tag vazia

    ```javascript
        function List(){
        return (
            <>
            
            </>
        )
    }

    export default List
    ```

    - esse aqui é o fragment com o reaproveitamento de componente
        ```javascript
        import Item from "./Item"

        function List(){
            return (
                    <>
                    <h1>Minha lista</h1>
                    <ul>
                        <Item marca= "ferrari"/>
                        <Item marca= "bugatti"/>

                    </ul>
                    </>
                    )
        }

        export default List
        ```

- `aula 8` props
    - `ano_lancamento={1987}` forma de digitar o número
    - `number` a gente vai passar entre as chaves
    - `import PropTypes from 'prop-types'`
    - o default é uma maneira bem simples de colocar valores padrões 
    

        ```javascript
            import PropTypes from 'prop-types'

            function Item({marca, ano_lancamento}){
                return (
                    <>
                    <li>{marca} - {ano_lancamento}</li>
                    </>
                )
            }

            Item.propTypes ={
                marca: PropTypes.string.isRequired,
                ano_lancamento: PropTypes.number,
            }
            
            Item.defaultProps = {
            marca: 'Faltou a marca',
            ano_lancamento: 0,
            }
            export default Item
        ```


- `aula 9` Eventos

    - coisas interessantes sobre os Eventos
    ```javascript
            function Evento({ numero }) {

            function meuEvento() {
                
                console.log(`Opa fui ativado ${numero}`)
            }

            return (
                <div>
                    <p>Clique para disparar um evento</p>
                    <button onClick={meuEvento}>Ativar</button>
                </div>
            )
        }

        export default Evento
    ```
    - aqui tem o argumento e o onclick que pode ser alterado onde ele for chamado
    - aqui temos um exemplo do prevent default 

    ```javascript
        function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log("cadastrou o usuário")
    }

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome"></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"></input>
                </div>
            </form>
        </div>
    )
    }

    export default Form
    ```

- `aula 10` use State
    - é um hook do react
    - adiciona funcionalidades que a gente deveria codificar na mão
    - manusear os estados de um componente de forma simples
    - `<label htmlFor="name">ANme:</label>` 
    - `import { useState } from 'react'`
    - pegando campos

- `aula 11` eventos por props
    - um componente filho pode ativar o método com o componente pai
    - acessar p método por meio de um evento
    - aqui vemos reaproveitamnete de componetes 
    - usando o componente filho para mudar o pai
    ```javascript
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
    ```

- `aula 12` Renderização condicional
    - depois eu tenho que revisar a questão do useState e essa lógica
    ```javascript
        import { useState } from 'react'

        function Condicional() {
            const [email, setEmail] = useState()
            const [userEmail, setUserEmail] = useState()

            function enviarEmail(e) {
                e.preventDefault()
                setUserEmail(email)
                console.log(userEmail)
            }

            function limparEmail(e) {

                setUserEmail("")

            }

            return (
                <div>
                    <h2>Cadastre o seu email:</h2>
                    <form>
                        <input type="email"
                            placeholder="digite o seu email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit" onClick={enviarEmail} >
                            Enviar Email
                        </button>
                        {userEmail && (
                            <div>
                                <p>O email do usuário é {userEmail}</p>
                                <button onClick={limparEmail}>Limpar E-mail</button>
                            </div>
                        )}
                    </form>
                </div>
            )
        }

        export default Condicional
    ```

- `aula 13` Renderização de listas
    - uso da do map para renderizar itens em um array
    - forma de declarar uma lista a baixo
    - `const meusItens = ['react', 'vue', 'angular']`
    - forma de usar essa lista abaixo
    - `<OutraLista itens={meusItens} />`
    - forma de usar lista vazia abaixo
    - `<OutraLista itens={[]} />`

    - forma de criar um componente de lista abaixo

    ```javascript
                function OutraLista({ itens }) {
            return (
                <>
                    <h3>Minha lista de coisas boas</h3>
                    {itens.length > 0 ? (
                        itens.map((item, index) =>
                            <p key={index}>{item}</p>
                        ))
                        : (
                            <p>Não há itens na lista</p>
                        )
                    }
                </>
            )
        }

        export default OutraLista
    ```

- `aula 14` State Lift
    - nesse código tem a função Suadação
    - essa função via ser usado junto com o useSate
    - useState para setar o nome
    ```javascript
    function Saudacao({ nome }) {

    function gerarSaudacao(algumNome) {
        return `Olá, ${nome}, tudo bem?`
    }

    return (
        <>{nome && <p>{gerarSaudacao(nome)}</p>}</>
    )
    }

    export default Saudacao
    ```

    - assim
    ```javascript
    import { useState } from 'react'

    import './App.css';

    import SeuNome from './components/SeuNome';
    import Saudacao from './components/Saudacao';


    function App() {
    const [nome, setNome] = useState()

    //retorno da função
    return (

        <div className="App">
        <h1>State lift</h1>
        <SeuNome setNome={setNome} />
        <Saudacao nome={nome} />
        </div>
    );
    }

    // exportando o código
    export default App;

    ```

    - também tem a função SeuNome
    - chama a função setNome e ela é definida com um retorno
    ```javascript
            function SeuNome({ setNome }) {
            return (
                <div>
                    <p>Digite o seu Nome:</p>
                    <input type="text" placeholder="Qual é o seu nome?"
                        onChange={(e) => setNome(e.target.value)}
                    ></input>
                </div>
            )
        }

        export default SeuNome
    ```

- `aula 15` React Router
    - rota da home, etc
    - muda de view para view
    - para usar o react router precisa rodar esse comando `npm install react-router-dom`
    - Switch foi trocado por Routes
    - para não dar problemas na navegação `<Route exact path="/">`

# imagens grátis
- https://pixabay.com/pt/


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
