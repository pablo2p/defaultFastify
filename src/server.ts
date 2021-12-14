import { app } from './app';

(async () => {
  try {
    await app.listen(3333);
    console.log('Servidor iniciado!');
  } catch (e) {
    app.log.error(e);
    process.exit(1);
  }
})();
