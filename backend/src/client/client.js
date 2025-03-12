const io = require("socket.io-client");
const readline = require("readline");

var myMsgInput = '';

const socket = io("http://localhost:3000");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

socket.on("connect", () => {
    console.log("Conectado ao servidor WebSocket!");

    rl.addListener("line", (input) => {
        myMsgInput = input;
        socket.emit("mensagem", input);  // Envia mensagem ao servidor
    });
});

socket.on("mensagem", (msg) => {
    const msgSplited = msg.split(" - ");
    myMsgInput !== msgSplited[1] && console.log(`Usuário (${msgSplited[0] || 'Servidor'}): `, msgSplited[1]);
});
