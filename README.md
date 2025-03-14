# LiveChat

Este projeto é uma aplicação de chat em tempo real, criada com o objetivo de ser utilizada como portfólio. O LiveChat permite que usuários entrem em salas de chat, conversem em tempo real, e compartilhem informações como localização, áudio e outros recursos.

## Funcionalidades

- **Entrar em uma sala de chat**: O usuário pode digitar o nome de uma sala e verificar se já existem outras pessoas dentro dela.
- **Envio de mensagens em tempo real**: As mensagens trocadas entre os usuários nas salas são enviadas e recebidas instantaneamente.
- **Envio de localização**: Usuários podem compartilhar sua localização dentro da sala.
- **Envio de áudio**: O aplicativo permite o envio de mensagens de áudio entre os participantes da sala.

## Tecnologias Utilizadas

- **Node.js**: Plataforma para construção da aplicação.
- **Socket.io**: Biblioteca que permite a comunicação em tempo real entre cliente e servidor.
- **Express**: Framework web para facilitar a criação do servidor HTTP.
- **MongoDB (opcional)**: Para armazenar as informações sobre as salas e mensagens, caso você deseje persistência.

## Instalação

Para rodar o LiveChat localmente, siga os passos abaixo:

### Pré-requisitos

- Node.js (versão >= 12.0)
- NPM (gerenciador de pacotes do Node.js)

### Passo a Passo

1. Ao acessar a aplicação, o usuário verá um campo onde pode digitar o nome da sala para a qual deseja entrar.

2. Após entrar na sala, o usuário pode interagir em tempo real com os outros participantes.

3. Mensagens de texto, localização e áudio podem ser compartilhados na sala.