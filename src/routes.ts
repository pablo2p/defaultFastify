import { getHelloWorld, getAuthor } from '@routers/default';

function router(instance, opts, next) {
  instance.get('/', getHelloWorld);
  instance.get('/author', getAuthor);
  next();
}

export { router };
