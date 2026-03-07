import { Router } from 'express';
import * as typesController from '../controllers/type.controller.js';

const router = Router();

router.get('/type/:typeName', typesController.getTypeByNameController);
router.post('/type/new', typesController.createNewTypeController);
router.patch('/type/:typeName', typesController.updateTypeController);

router.patch('/type/effectiveness/:typeName', typesController.);

export { router as typeRouter };