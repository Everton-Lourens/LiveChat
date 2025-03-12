const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const dateFormatter = require('../../utils/date');

const app = express();
const server = http.createServer(app);

/////////////////////////////////
const io = new Server(server);
/*
const io = new Server(server, {
    cors: {
        origin: '*', // Para aceitar qualquer origem, ideal para testes locais
        methods: ['GET', 'POST'],
    },
});
*/
/////////////////////////////////



io.on('connection', (socket) => {
    console.log(`Novo cliente conectado: (${socket.id}) - ${dateFormatter(socket.handshake.time)}`);

    socket.on('mensagem', (msg) => {
        console.log(`Mensagem recebida no servidor - (${socket?.id}): `, msg);
        msg = `${socket?.id} - ${msg}`;
        io.emit('mensagem', msg); // Reenvia para todos os clientes conectados
    });

    socket.on('disconnect', () => {
        console.log('Cliente desconectado:', socket.id);
    });
});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
