import { Router } from "express";
import * as movesController from "../controllers/move.controller.js";

const router = Router();

router.get('/:moveName', movesController.getMoveByNameController);
router.post('/new', movesController.createNewMoveController);
router.patch('/:moveName', movesController.updateMoveController);
router.delete('/:moveName', movesController.deleteMoveController);

export { router as moveRouter };