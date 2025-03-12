module.exports = function dateFormatter(dateString) {
    const timeZone = 'America/Sao_Paulo'; // Ou pegue do socket.handshake.timeZone
    const date = dateString ? new Date(dateString) : new Date();

    const formatoDataHora = new Intl.DateTimeFormat('pt-BR', {
        timeZone,
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(date);

    return formatoDataHora;
}
