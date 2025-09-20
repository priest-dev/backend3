// src/routes/users.router.js
import { Router } from 'express';
import usersController from '../controllers/users.controller.js';

const router = Router();

/**
 * @openapi
 * /api/users:
 *   get:
 *     tags: [Users]
 *     summary: Listar todos los usuarios
 */
router.get('/', usersController.getAllUsers);

/**
 * @openapi
 * /api/users/{uid}:
 *   get:
 *     tags: [Users]
 *     summary: Obtener un usuario por ID
 */
router.get('/:uid', usersController.getUser);

/**
 * @openapi
 * /api/users/{uid}:
 *   put:
 *     tags: [Users]
 *     summary: Actualizar un usuario
 */
router.put('/:uid', usersController.updateUser);

/**
 * @openapi
 * /api/users/{uid}:
 *   delete:
 *     tags: [Users]
 *     summary: Eliminar un usuario
 */
router.delete('/:uid', usersController.deleteUser);

export default router;
