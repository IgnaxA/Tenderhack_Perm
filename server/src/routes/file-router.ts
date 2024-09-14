import express, {Router} from "express";
import {FileController} from "../controllers/file-controller";

export class FileRouter {
    private readonly fileRouter: Router;
    private readonly fileController: FileController;

    constructor(fileController: FileController) {
        this.fileRouter = express.Router();

        this.fileController = fileController;
    }

    public setRouter(): void {
        this.fileRouter.post("/transform", this.fileController.transform);
    }

    public getRouter(): Router {
        return this.fileRouter;
    }
}