import { Router } from "express";
import { getServices, login } from "../controllers/auth.controller";
import { serviceAuthMiddleware } from "../middleware/serviceAuth.middleware";

const router = Router();

router.post('/login', login);
router.get('/services', serviceAuthMiddleware, getServices)

export default router;