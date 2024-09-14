import {FileController} from "../file-controller";
import e from "express";

export class FileControllerImpl implements FileController{
    public transform = async (req: e.Request, res: e.Response): Promise<void> => {
        return Promise.resolve(undefined);
    }
}