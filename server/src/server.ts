import express, {Express} from "express";
import {StartUpConfig, StartUpConfigParse} from "./configs/utils/start-up-config-parse";
import {FileRouter} from "./routes/file-router";
import {FileController} from "./rest/controllers/file-controller";
import {FileControllerImpl} from "./rest/controllers/impls/file-controller-impl";
import bodyParser from "body-parser";
import {FileService} from "./services/file-service";
import {FileServiceImpl} from "./services/impls/file-service-impl";

const APIPrefix: string = "/api";
const filePrefix: string = APIPrefix + "/files";
const app: Express = express();
app.use(express.json());
app.use(bodyParser.raw({inflate: true, type: (): boolean => true, limit: '200mb'}));

const startUpConfig: StartUpConfig = StartUpConfigParse.get();
const PORT: number = startUpConfig.PORT;
const isProd: boolean = startUpConfig.PROD;

const fileService: FileService = new FileServiceImpl();
const fileController: FileController = new FileControllerImpl(fileService);
const fileRouter: FileRouter = new FileRouter(fileController);
fileRouter.setRouter();

app.use(filePrefix, fileRouter.getRouter());

app.listen(PORT, (err: void | Error): void => {
   err ? console.log(err) : console.log(`Listening ${PORT} port`);
});