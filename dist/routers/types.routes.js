import { Router } from 'express';
import * as typesController from '../controllers/types.controller.js';
const router = Router();
router.get('/type/:typeName', typesController.findById);
export { router as typeRouter };
//# sourceMappingURL=types.routes.js.map