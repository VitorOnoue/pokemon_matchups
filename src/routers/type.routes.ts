import { Router } from 'express';
import * as typesController from '../controllers/type.controller.js';

const router = Router();

router.get('/:typeName', typesController.getTypeByNameController);
router.post('/new', typesController.createNewTypeController);
router.patch('/:typeName', typesController.updateTypeController);
router.delete('/:typeName', typesController.deleteTypeController);

export { router as typeRouter };