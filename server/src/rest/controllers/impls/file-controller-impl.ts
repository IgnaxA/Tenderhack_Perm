import {FileController} from "../file-controller";
import {Request, Response} from "express";
import {FileDto} from "../../dtos/input/impls/file-dto";
import {ParseBody} from "../../utils/parse-body";
import {FileService} from "../../../services/file-service";

export class FileControllerImpl implements FileController {
    private readonly fileService: FileService;

    constructor(fileService: FileService) {
        this.fileService = fileService;
    }

    public transform = async (req: Request, res: Response): Promise<void> => {
        const fileDto: FileDto = ParseBody.parse<FileDto>(req, FileDto);
        this.fileService.transform(fileDto);
    }
}