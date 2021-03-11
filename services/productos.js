const {create, createImg} =require("./../models/productos");
const {imgFile} = require('./../utils/fileHandler')

const createProducto = async ()=>{
    try{
        const {insertid : idProducto} = await create(body);
        const uid= imgFile(file);
        const obj = {idProducto, uid};
        const {insertid : idFile} = await createImg(obj);
        return idFile;

    }
    catch(e){
        console.log(e);

    }
}


module.exports = {createProducto};