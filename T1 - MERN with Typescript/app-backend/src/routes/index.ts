import { Router } from "express";

import tutorialsRouter from "./tutorials.routes";

const router = Router();

router.use("/tutorials", tutorialsRouter);

export default router;