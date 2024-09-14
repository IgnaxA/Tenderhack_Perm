import {FileService} from "../file-service";
import {FileDto} from "../../rest/dtos/input/impls/file-dto";
import {ParsedFile} from "../../rest/dtos/output/parsed-file";

export class FileServiceImpl implements FileService {
    public async transform(fileDto: FileDto): Promise<ParsedFile> {
        return new ParsedFile();
    }

}