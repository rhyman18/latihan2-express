const express = require('express');
const routes = express.Router();
const biodata = require('./data/biodata');

routes.get('/', function (req, res) {
    const nama = req.query.name || biodata.nama;
    const tempatLahir = req.query.tempat_lahir || biodata.tempatLahir;
    const tanggalLahir = req.query.tanggal_lahir || biodata.tanggalLahir;
    const alamat = req.query.alamat || biodata.alamat;

    res.send({
        'nama': nama,
        'tempat-lahir': tempatLahir,
        'tanggal-lahir': tanggalLahir,
        'alamat': alamat,
    });
});

routes.post('/', function (req, res) {
    const nama = req.body.name;
    const tempatLahir = req.body.tempat_lahir;
    const tanggalLahir = req.body.tanggal_lahir;
    const alamat = req.body.alamat;

    res.send({
        'nama': nama,
        'tempat-lahir': tempatLahir,
        'tanggal-lahir': tanggalLahir,
        'alamat': alamat,
    });
});

module.exports = routes;
