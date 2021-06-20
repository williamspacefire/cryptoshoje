Nessa série de posts vamos aprender a criar um bot para o Discord. Recentemente eu precisei de um Bot para um servidor do Discord que eu tenho, existem várias opções de Bots atualmente, opções muito boas até, mas eu estava precisando de algo personalizado, uma personalização que os outros Bots não oferecem.

<https://compilado.xyz>

Se você está passando pela mesma necessidade ou só quer fazer seu próprio Bot, está no lugar certo. Vamos fazer um Bot personalizado para um servidor, mas você pode adaptar o código para o seu servidor, e se você planeja adicionar ele em servidores diferentes, é possível adaptar ele para cada servidor de forma dinâmica, vamos abordar isso mais para frente.

## Passo 1 – Criando o Bot:

Primeiro precisamos acessar o Portal de Desenvolvedor do Discord e criar uma aplicação. Para isso, Acesse: [https://discord.com/developers/applications](https://discord.com/developers/applications 'Portal de Desenvolvedor do Discord')

No canto superior direito clique em New Application (Nova Aplicação)

![Criar nova aplicação no Discord](/v1611760138/compilado/screen03_gctr1t.jpg)

Irá abrir uma janela, escreva o nome do seu Bot e clique em Create (Criar)

![Escolher nome da aplicação](/v1611760565/compilado/screen04_fhrt2m.jpg)

Você será redirecionado para a página da sua aplicação. No canto esquerdo, procure a opção Bot e clique nela.

![Menu de configurações da aplicação](/v1611760565/compilado/screen05-edited_sdctzq.jpg)

Na próxima tela, terá a opção para habilitar o bot a sua aplicação, clique em “Add Bot”, irá aparecer uma janela, você clica em “Yes, do it”.

![Tela para criar um bot](/v1611760565/compilado/screen06_pvaj1o.jpg)
Após fazer isso, você irá se deparar com a seguinte tela:

![Tela do bot criado com sucesso](/v1611760566/compilado/screen07_c7c5h3.jpg)
Essa tela é importante, pois é nela que você irá obter o Token do Bot, necessário para fazer a autenticação com o servidor do Discord. Clique em “Click to Reveal Token” para ver seu Token. Em Authorization Flow tem uma opção de “Public Bot”, ela vem marcada por padrão, se seu bot for um bot público em que você quer que qualquer pessoa adicione ele em seus servidores, pode deixar como está, mas se você não quer isso, eu aconselho desmarcar essa opção.

```js
const x = 4
const y = 5

console.log(x * y)
```

Após isso, vamos criar um novo servidor no Discord para poder testar o nosso Bot enquanto codificamos ele. Vou assumir que você já sabe como fazer isso, e pular essa parte.

Agora que temos nosso servidor de teste, voltamos a página de desenvolvedor do Discord, e dessa vez vamos na página de “OAuth2” para gerar o link para convidar nosso Bot para o servidor com as devidas permissões.

![Tela de permissões do bot](/v1611760566/compilado/screen08_wv2ifj.jpg)
Primeiro devemos selecionar a opção “bot” em scopes, depois devemos selecionar as permissões que o bot precisa na seção “bot permissions”, você deve ter muito cuidado com a permissão de Administrador, pois com essa permissão o bot pode fazer tudo no servidor, e se não estiver bem programado, os usuários do servidor pode encontrar alguma vulnerabilidade e fazer oque quiser com o servidor.

Para esse tutorial vamos selecionar apenas as opções “Send Messages” para podermos enviar mensagens nos canais de texto, “Manage Messages” para que seja possível deletar mensagens e “Mute Members” para mutar e desmutar os membros do servidor.

Após fazer isso, é só clicar em “Copy” lá em cima, perto do link, cola no seu navegador e acessa ele. irá aparecer uma tela para você adicionar o bot a algum servidor em que você tem permissão de Administrador. Depois disso, podemos partir para o código.

## Passo 2 – instalando as dependências:

Nosso bot será escrito em JavaScript e vamos rodar ele com Node.js, se você não tem o Node instalado, acesse o site do [Node.js](https://nodejs.org/en/) para saber como instalar. Para não deixar esse tutorial muito longo, irei pular essa parte e assumir que você já tem o node e npm instalado.

Primeiro vamos abrir nosso terminal de linha de comandos. Se você está usando Windows será CMD, Prompt de Comando ou PowerShell. Se você está usando Linux é Terminal. Após abrir seu terminal, execute o comando abaixo, para criar uma pasta onde vai ficar os arquivos do seu bot e criar nosso package.json para gerenciar as dependências do nosso projeto.

Após executar esse comando, irá aparecer um terminar interativo para você fornecer algumas informações, o que tiver dentro de parênteses você pode apertar enter por que é o valor padrão, só escreva algo se quiser alterar, no final escreva “yes” para finalizar:

Feito isso, será criado um arquivo chamado package.json, ele serve para gerenciar as dependências do seu projeto. Se você olhar dentro do arquivo você verá algo semelhante a isso:

Feito isso, vamos agora instalar o discord.js que é a única dependência que vamos usar, execute o comando abaixo.

Após instalar o discord.js podemos escrever nosso primeiro código.

## Passo 3 – Escrevendo o primeiro código

Agora que configuramos tudo, vamos criar um arquivo chamado index.js e por o nosso código nele. Copie e cole o código abaixo.

depois vá até a constante “token” na **linha 8** e insira o token do seu bot, após fazer isso abra seu Terminal e execute o comando:

Se você não ver nenhum erro no seu Terminal, vá até seu servidor no Discord, você deverá ver seu bot online na lista de membros, vá em algum canal de texto envie **/ping** e você deverá obter uma resposta do bot.

Bem fácil não é? Nesse artigo aprendemos a criar a parte básica do nosso bot, no próximo artigo vamos criar um bot mais avançado. Vamos criar o comandos para mutar algum membro do servidor, excluir mensagens que tem algum conteúdo de uma lista de palavras.

Se você não quer esperar até o próximo artigo ou quer mexer mais no código e deseja aprender mais sobre o discord.js, acesse o <https://discord.js.org/#/> para saber mais.
