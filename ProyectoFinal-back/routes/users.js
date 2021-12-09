import express from 'express';

import { likeUser, login, getAllUsers, dislikeUser } from '../controllers/users.js'

const rutas = express.Router();

rutas.post('/login', login);
rutas.get('/display', getAllUsers);

rutas.put('/likes/:_id', likeUser);

rutas.put('/dislikes/:id', dislikeUser);

export default rutas;