import express from 'express';
import { getAll } from '../controllers/ProductController.js';

const router = express.Router();

router.route('/').get(getAll);

export default router;