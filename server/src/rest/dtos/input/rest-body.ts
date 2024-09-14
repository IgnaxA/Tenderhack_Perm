import {Request} from "express";

export abstract class RestBody<T extends RestBody<T>> {
    abstract parse(req: Request): T;
}