import { Router } from "express";
import * as movesController from "../controllers/move.controller.js";

const router = Router();

router.post('/move/new', movesController.createNewMove);

export { router as moveRouter };