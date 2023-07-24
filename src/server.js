import http from 'node:http';

const server = http.createServer((req, res) => {
    console.log('Server Running 💻');
    return res.end('Server ON');
});

server.listen(3333);