import { Router } from "express";
import { postServiceAccess } from "../controllers/serviceAccess.controller";
const router = Router();

router.post('/user/:id', postServiceAccess);

export default router;