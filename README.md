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




# aulas
- `aula 3` entendendo o JSX
- `aula 4` criando os componentes
- `aula 5` trabalhando com props
- `aula 6` inserindo CSS no React
- `aula 7` Utilizando React Fragments
- `aula 8` props

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
