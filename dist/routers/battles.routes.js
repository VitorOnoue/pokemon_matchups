import { Router } from 'express';
import * as battlesController from '../controllers/battles.controller.js';
const router = Router();
router.get('/battle/:nameA/:nameB', battlesController.battle);
export { router as battleRouter };
//# sourceMappingURL=battles.routes.js.map