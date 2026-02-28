import { Router } from 'express';
import * as typesController from '../controllers/type.controller.js';

const router = Router();

router.get('/type/:typeName', typesController.findById);

router.post('/type/new', typesController.createNewTypeController);

router.patch('/type/:typeName', typesController.updateTypeController);

export { router as typeRouter };