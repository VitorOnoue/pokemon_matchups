import { Router } from 'express';
import * as typesController from '../controllers/type.controller.js';

const router = Router();

router.get('/type/:typeName', typesController.findById);

router.post('/type/new', typesController.createNewType);

router.patch('/type/:typeName/weaknesses', typesController.updateTypeWeaknesses);
router.patch('/type/:typeName/resistances', typesController.updateTypeResistances);

export { router as typeRouter };