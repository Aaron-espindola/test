const fs = require('fs');
const {v4 : uuid} = require('uuid');
const allawExtension = ["png" , "jpg"];

const deleteTmp = (file) => fs.unlink(file, e => console.log(e));


const saveFile = ({mimeype, size, path}, extension, destFolder = './public/images') => {
    try{
    const [type, ext] = MimeType.split("/");
    if(!extension.includes(ext)){
        throw new Error("Formato incorrecto");
    }
    const uid = uuid();
    const fileNameOut = `${destFolder}/${uid}.${ext}`
    fs.createReadStream(path).pipe(fs.createWriteStream(fileNameOut));
    deleteTmp(path);
    return fileNameOut;
    }
    catch(e){
        console.error(e);
        deleteTmp(path);
    }
    
}

const imgFile = (file) => saveFile(file, allawExtension);

module.exports = {imgFile};
