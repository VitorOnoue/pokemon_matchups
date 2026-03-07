import { Router } from "express";
import * as movesController from "../controllers/move.controller.js";

const router = Router();

router.get('/move/:moveName', movesController.getMoveByNameController);
router.post('/move/new', movesController.createNewMoveController);
router.patch('/move/:moveName', movesController.updateMoveController);
router.delete('/move/:moveName', movesController.deleteMoveController);

export { router as moveRouter };