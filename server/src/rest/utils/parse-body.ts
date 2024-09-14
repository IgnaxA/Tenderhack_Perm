import {RestBody} from "../dtos/input/rest-body";
import {Request} from "express";

export class ParseBody {
    public static parse<T extends RestBody<any>>(req: Request, t: new() => T): T {
        const body: T = new t();

        return body.parse(req);
    }
}