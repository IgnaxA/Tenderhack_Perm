import {ParseHelper} from "../../utils/parse-helper";

export class StartUpConfigParse {
    private static readonly startUpConfig: StartUpConfig = {} as StartUpConfig;

    public static get(): StartUpConfig {
        this.parse();

        return this.startUpConfig;
    }

    private static parse(): void {

        this.startUpConfig.PORT = ParseHelper.parseNumber(process.env.PORT);

        this.startUpConfig.PROD = ParseHelper.parseBoolean(process.env.PROD);
    }
}

export interface StartUpConfig {
    PORT: number;
    PROD: boolean;
}