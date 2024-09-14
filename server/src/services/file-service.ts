import {ParsedFile} from "../rest/dtos/output/parsed-file";
import {FileDto} from "../rest/dtos/input/impls/file-dto";

export interface FileService {
    transform(fileDto: FileDto): Promise<ParsedFile>;
}