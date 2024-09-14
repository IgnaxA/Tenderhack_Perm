import {Request, Response} from "express";

export interface FileController {
    transform(req: Request, res: Response): Promise<void>;
}