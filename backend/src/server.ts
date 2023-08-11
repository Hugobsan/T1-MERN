import cors from "cors";
import express, { Router } from "express";
import EnsureAuthentication from "./middlewares/ensureAuthentication";
import router from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

//Importando middleware de validação de token
router.use(EnsureAuthentication);

app.use(router);

app.listen(4000, () => {
  console.log("\n [NODE] Server started on port 4000");
});
