# Node.js

>### criar package.json inicial

```
> npm init
```
&nbsp;
>### instalar Typescript globalmente (-g)
```
> npm install -g typescript
```
&nbsp;
>### instalar Typescript dentro do projeto (dev)
```
> npm install --save-dev typescript
```
&nbsp;
>### instalar as bibliotecas padrão do Node
```
> npm install --save-dev @types/node
```
&nbsp;
>### criar tsconfig.json (Typescript config)
```
> tsc --init
```
&nbsp;
>### ajustar tsconfig.json
```
{
    "compilerOptions": {
      "target": "es2021",
      "module": "commonjs",
      "rootDir": "src",
      "moduleResolution": "node",
      "typeRoots": [
        "./src/@types", 
        "./node_modules/@types"
      ],
      "outDir": "./dist",
      "removeComments": true,
      "esModuleInterop": true,
      "forceConsistentCasingInFileNames": true,
      "strict": true,
      "skipLibCheck": true
    }
  }
```
&nbsp;
>### criar as pastas usadas no projeto (dist, src e @types)

- #### pasta_projeto/___dist___
- #### pasta_projeto/___src___
- #### pasta_projeto/src/___@types___
&nbsp;
>### Organizando a estrutura
- renomear o arquivo index.js para index.ts e movê-lo para a pasta src
- no arquivo package.json, faça:
  - "main": "./dist/index.js"
  - "start": "node ./"
  - "build": "tsc -p ./"
&nbsp;
&nbsp;
## Seguindo com a configuração do Express
&nbsp;
>### instalar o Framework Express
```
> npm install --save express
```
&nbsp;
>### instalar os types do Express
```
> npm install --save-dev @types/express
```
&nbsp;
## Habilitar transpilação/autoreload de código Typescript
&nbsp;
>### instalar ts-node-dev
```
> npm install --save-dev ts-node-dev
```
&nbsp;
>### editar package.json e incluir um novo script
```
> "dev": "ts-node-dev --respawn --transpile-only --ignore-watch node_modules --no-notify src/index.ts"
```
