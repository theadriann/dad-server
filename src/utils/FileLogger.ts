//
import fs from "fs-extra";

//
export class FileLogger {
    private static instances: { [key: string]: FileLogger } = {};
    private static folderPath: string = "logs";

    fileName: string;

    private constructor(fileName: string) {
        if (!fs.existsSync(FileLogger.folderPath)) {
            fs.mkdirSync(FileLogger.folderPath);
        }

        this.fileName = fileName;
    }

    public static getInstance(fileName?: string): FileLogger {
        fileName = fileName || "default.log";

        if (FileLogger.instances[fileName]) {
            return FileLogger.instances[fileName];
        }

        FileLogger.instances[fileName] = new FileLogger(fileName);

        return FileLogger.instances[fileName];
    }

    public log(message: string): void {
        //
        const filePath = `${FileLogger.folderPath}/${this.fileName}`;

        // check if file exists
        fs.ensureFileSync(filePath);

        //
        fs.appendFile(filePath, `${message}\n`, (err) => {
            if (err) {
                console.error(err);
            }
        });
    }
}

export const logger = FileLogger.getInstance();

export const scopedLogger = (fileName: string) => {
    if (!fileName.endsWith(".log")) {
        fileName += ".log";
    }

    return FileLogger.getInstance(fileName);
};
