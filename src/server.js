import http from 'node:http';

const server = http.createServer((req, res) => {
    return res.end('Server');
});

server.listen(3333);