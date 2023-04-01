interface MockFile {
    name: string;
    body: string;
    mimeType: string;
}

const createFileFromMockFile = (file: MockFile): File => {
    const blob = new Blob([file.body], { type: file.mimeType }) as any;
    blob['lastModifiedDate'] = new Date();
    blob['name'] = file.name;
    return blob as File;
};

const createMockFileList = (files: MockFile[]) => {
    const fileList: FileList = {
        length: files.length,
        item(index: number): File {
            return fileList[index];
        },
        [Symbol.iterator]: function (): IterableIterator<File> {
            throw new Error("Function not implemented.");
        }
    };
    files.forEach((file, index) => fileList[index] = createFileFromMockFile(file));

    return fileList;
};
const fileList = createMockFileList([{body: 'test',
mimeType: 'image/*',
name: "TxAm1VzYFEg.jpg"}])
export default fileList;