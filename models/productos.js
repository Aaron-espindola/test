const pool = require('./../utils/bd');
const TABLA_PRODUCTOS = "productos";
const T_PRODUCTOS_IMAGENES = "productos_imgenes"

//reutilizo mi funcion get del otro model y la adapto a mi nueva tabla
const get = async () => {
    const query = "SELECT * FROM ??";
    const params = [TABLA_PRODUCTOS];
    // la query me devuelve un objeto o conjunto de filas Data Row Package en un [{}]
    const rows = await pool.query(query, params);
    return rows;
}
const create = async (obj) => {
    const query= " INSERT INTO ?? SET ? "
    const params =[TABLA_PRODUCTOS, obj];
    return await pool.query(query, params);
}
const createImg = async () => {
    pool.query("INSERT INTO ?? SET ?",[T_PRODUCTOS_IMAGENES,obj]).then((response) => response) .catch((e) => console.log(e));
}
module.exports = {get, create, createImg}