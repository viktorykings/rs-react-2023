interface MockFile {
  name: string;
  body: string;
  mimeType: string;
}

interface iBlob extends Blob, File {
  name: string;
  lastModifiedDate: Date;
  lastModified: number;
  webkitRelativePathts: string;
}

const createFileFromMockFile = (file: MockFile): File => {
  const blob: Partial<iBlob> = new Blob([file.body], { type: file.mimeType });
  blob.lastModifiedDate = new Date();
  blob.name = file.name;
  blob.lastModified = Date.now();
  return blob as File;
};

const createMockFileList = (files: MockFile[]) => {
  const fileList: FileList = {
    length: files.length,
    item(index: number): File {
      return fileList[index];
    },
    [Symbol.iterator]: function* (): IterableIterator<File> {
      for (const file of files) {
        yield file as unknown as File;
      }
    },
  };
  files.forEach((file, index) => (fileList[index] = createFileFromMockFile(file)));

  return fileList;
};
const fileList = createMockFileList([
  { body: 'test', mimeType: 'image/*', name: 'TxAm1VzYFEg.jpg' },
]);
export default fileList;
