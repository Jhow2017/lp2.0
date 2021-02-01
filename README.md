## Iniciar Projeto Local

### `npm start`

Projeto vai rodar em modo desenvolvedor .<br />
abrir [http://localhost:3000](http://localhost:3000).

A página será recarregada se você fizer edições.<br />
Você também verá quaisquer erros de lint no console.

### `npm test`

Inicia o executor de teste no modo de observação interativo. <br />
Veja a seção sobre [running tests](https://facebook.github.io/create-react-app/docs/running-tests) Para maiores informações.

### `npm run build`

Compila o aplicativo para produção na pasta `build`.<br />
Ele agrupa corretamente o React no modo de produção e otimiza a construção para o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes. <br />
Seu aplicativo está pronto para ser implantado!

Veja a seção sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) Para maiores informações.

## Saber mais

Quando você tiver feito alteações no projeto para o evento desejado, para gerar a pasta com nome do projeto em frontend/public você tera que fazer as seguintes alterações.

`1º = Ir na pasta public no arquivo index e altera em href para eventkey <base href="/teste" />`

`2º = Ir no arquivo app dentro de src você tera que alterar <BrowserRouter basename="/teste"> para a eventkey`

`3º = Ir no arquivo package.json alterar "homepage": "teste" para eventkey e também no comando "build:Serve" você alterar onde esta nome teste para o nome do eventKey`

`4º = o ultimo passo e no terminal dentro da pasta do projeto em react você rodar o código = 'npm run build:Serve' que vai gerar build dentro da pasta frontend/public`
