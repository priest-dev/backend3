// src/swagger.js
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Adoptme API',
      version: '1.0.0',
      description: 'Documentación de la API Adoptme (módulo USERS).',
    },
    servers: [{ url: 'http://localhost:8080', description: 'Local' }],
    tags: [{ name: 'Users', description: 'Gestión de usuarios' }],
    components: {
      schemas: {
        User: {
          type: 'object',
          properties: {
            _id: { type: 'string', example: '66f0b1a2c9f0a12b34567890' },
            first_name: { type: 'string', example: 'Juan' },
            last_name: { type: 'string', example: 'Pérez' },
            email: { type: 'string', example: 'juan@example.com' },
            role: { type: 'string', example: 'user' }
          }
        },
        UpdateUserInput: {
          type: 'object',
          properties: {
            first_name: { type: 'string', example: 'Juani' },
            last_name: { type: 'string', example: 'Pérez' },
            role: { type: 'string', example: 'admin' }
          }
        },
        ApiResponse: {
          type: 'object',
          properties: {
            status: { type: 'string', example: 'success' },
            message: { type: 'string', example: 'User updated' }
          }
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            status: { type: 'string', example: 'error' },
            error: { type: 'string', example: 'User not found' }
          }
        }
      }
    }
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
