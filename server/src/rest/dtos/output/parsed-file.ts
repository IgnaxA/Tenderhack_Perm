
export class ParsedFile {
    private _body: string;

    public set body(body: string) {
        this._body = body;
    }

    public get body(): string {
        return this._body;
    }

    constructor() {
        this._body = "";
    }


}