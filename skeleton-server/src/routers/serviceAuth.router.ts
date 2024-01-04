import { Router } from "express";
import { checkServiceAccess } from "../controllers/auth.controller";
import { serviceAuthMiddleware } from "../middleware/serviceAuth.middleware";
const router = Router();

router.post('/verify', serviceAuthMiddleware, checkServiceAccess);

export default router;