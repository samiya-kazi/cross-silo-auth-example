import { Router } from "express";
import { checkServiceAccess, login } from "../controllers/auth.controller";
import { serviceAuthMiddleware } from "../middleware/serviceAuth.middleware";
const router = Router();

router.post('/login', login);
router.post('/verify', serviceAuthMiddleware, checkServiceAccess);

export default router;