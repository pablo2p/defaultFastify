import fastify from 'fastify';
import { router } from './routes';

const app = fastify({
  logger: true,
});

app.register(router, { prefix: 'api' });

export { app };
