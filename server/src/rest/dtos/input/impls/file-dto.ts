import {RestBody} from "../rest-body";
import {Request} from "express";

export class FileDto extends RestBody<FileDto> {
    private _file: Buffer | null;

    public get file(): Buffer | null {
        return this._file;
    }

    constructor() {
        super();
        this._file = null;
    }

    public parse(req: Request): this {
        this._file = req.body;

        return this;
    }

}