import {RestBody} from "../rest-body";
import {Request} from "express";

export class FileDto extends RestBody<FileDto> {
    private _file: Buffer;

    public get file(): Buffer {
        return this._file;
    }

    constructor() {
        super();
        this._file = Buffer.alloc(0);
    }

    public parse(req: Request): this {
        this._file = req.body;

        return this;
    }

}