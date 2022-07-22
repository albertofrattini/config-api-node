import express from "express";
import bodyParser from "body-parser";
import path from "path";
import router from "./routes";
import swaggerUi from "swagger-ui-express";
import { swaggerDoc } from "./docs/swagger";

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());

app.use("/api", router);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

const server = app.listen(3000, () =>
    console.log("Listening on localhost port 3000")
);

export default server;
