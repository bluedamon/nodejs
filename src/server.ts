import fastify from 'fastify';

const app = fastify();
app.get('/test', () => 'Server ON 💻');

app.listen({ port: 3333 }).then(() => { console.log('Server ON 💻'); });
