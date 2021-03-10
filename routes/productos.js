const express = require('express');
const router = express.Router();
const multer = require('multer');
const config = {dest: './public/tmp'}
const upload = multer(config);
const model = require('./../models/productos');
const service = require ('./../service/productos');


const all = async(req,res) => {
    var productos = await model.get();
    res.render('productoss', {productos});
}
const create= async (req,res) => {
    const idFile = await service.createProducto(req,body, req.file);
    res.redirect('/prdocutos');
}

router.get('/', all);
router.get('/create', (req,res) => res.render("crear producto"));
router.post('/create',upload.single("imagen"), create)

module.exports = router