import cors from "cors";
import express from "express";
import router from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(4000, () => {
    console.log("\n [NODE] Server started on http://127.0.0.1:4000")
});