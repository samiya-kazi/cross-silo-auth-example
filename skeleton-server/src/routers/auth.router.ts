import { Router } from "express";
import { checkServiceAccess, login } from "../controllers/auth.controller";

const router = Router();

router.post('/login', login);

export default router;