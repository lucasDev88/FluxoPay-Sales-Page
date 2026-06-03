import { Router } from "express";
import { LeadCreate, LeadList, LeadDelete, LeadStats } from "../controllers/leadController";

const router = Router();

router.post("/", LeadCreate);
router.get("/", LeadList);
router.get("/stats", LeadStats)
router.delete("/:id", LeadDelete)

export default router;