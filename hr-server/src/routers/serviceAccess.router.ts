import { Router } from "express";
import { checkServiceAccess, getAccessibleServicesForUser, postServiceAccess } from "../controllers/serviceAccess.controller";
const router = Router();

router.post('/user/:id', postServiceAccess);
router.post('/check', checkServiceAccess);
router.get('/service/:id', getAccessibleServicesForUser);

export default router;