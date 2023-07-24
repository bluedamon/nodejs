import fastify from 'fastify';

const app = fastify();
app.get('/test', () => {
    return 'Server ON 💻';
});

app.listen({port: 3333}).then(() => {console.log('Serves ON 💻')})