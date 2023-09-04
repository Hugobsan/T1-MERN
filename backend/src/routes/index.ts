import {Router} from "express";

import apiRouter from "./api.routes";
import tutorialsRouter from "./tutorials.routes";

const router = Router();

router.use("/tutorials", tutorialsRouter);

router.use("/api", apiRouter);

export default router;