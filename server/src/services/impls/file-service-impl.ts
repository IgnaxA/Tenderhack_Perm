import {FileService} from "../file-service";
import {FileDto} from "../../rest/dtos/input/impls/file-dto";
import {ParsedFile} from "../../rest/dtos/output/parsed-file";
import {FileUtils} from "../../utils/file-utils";

export class FileServiceImpl implements FileService {
    public async transform(fileDto: FileDto): Promise<ParsedFile> {
        const fileBody: Buffer = fileDto.file;
        const file: string = fileBody.toString(FileUtils.TEXT_FILE_FORMAT_BUFFER);


        return new ParsedFile();
    }

}