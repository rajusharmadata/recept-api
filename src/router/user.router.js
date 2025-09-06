import { Router } from 'express';
import { favoritesController, favoritedelete,getfav } from '../controller/favorite.controller.js';
const router = Router();
router.post('/favorites', favoritesController);
router.delete('/favorites/:userId/:recipeId', favoritedelete);
router.get('/favorites/:userId', getfav);
export {router} ;
