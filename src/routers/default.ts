import { FastifyRequest, FastifyReply } from 'fastify';

const getHelloWorld = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {
            type: 'string',
          },
        },
      },
    },
  },
  handler: (request: FastifyRequest, response: FastifyReply) => {
    response.send({ hello: 'world!' });
    // return { hello: 'world' }
  },
};

const getAuthor = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          age: { type: 'number' },
          city: { type: 'string' },
        },
      },
    },
  },
  handler: (request: FastifyRequest, response: FastifyReply) => {
    return {
      name: 'Pablo',
      age: 23,
      city: 'Jequié',
    };
  },
};

export { getHelloWorld, getAuthor };
