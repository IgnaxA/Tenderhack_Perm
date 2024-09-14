import express, {Express} from "express";
import {StartUpConfig, StartUpConfigParse} from "./configs/utils/start-up-config-parse";
import {FileRouter} from "./routes/file-router";
import {FileController} from "./controllers/file-controller";
import {FileControllerImpl} from "./controllers/impls/file-controller-impl";

const APIPrefix: string = "/api";
const app: Express = express();
app.use(express.json());

const startUpConfig: StartUpConfig = StartUpConfigParse.get();
const PORT: number = startUpConfig.PORT;
const isProd: boolean = startUpConfig.PROD;

const fileController: FileController = new FileControllerImpl();
const fileRouter: FileRouter = new FileRouter(fileController);
fileRouter.setRouter();

app.use(APIPrefix, fileRouter.getRouter());

app.listen(PORT, (err: void | Error): void => {
   err ? console.log(err) : console.log(`Listening ${PORT} port`);
});