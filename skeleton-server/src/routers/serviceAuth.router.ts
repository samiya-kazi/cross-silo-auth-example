import { Router } from "express";
import { checkServiceAccess } from "../controllers/auth.controller";
import { serviceAuthMiddleware } from "../middleware/serviceAuth.middleware";
import { getTokenFromStore, redirectToService } from "../controllers/service.controller";
const router = Router();

router.post('/verify', serviceAuthMiddleware, checkServiceAccess);
router.get('/redirect/:service', serviceAuthMiddleware, redirectToService);
router.get('/token/:code', getTokenFromStore);

export default router;