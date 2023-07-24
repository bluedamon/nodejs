import fastify from 'fastify';
import { knexConfig } from './database';

const app = fastify();
app.get('/test', async() => {
    const data = await knexConfig('sqlite_schema').select('*');

    return data;
});

app.listen({ port: 3333 }).then(() => { console.log('Server ON 💻'); });
