require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');
const port = process.env.PORT || 3000;
const biodata = require('./data/biodata');

app.use(express.json());

app.use(express.urlencoded({
    extended: true,
}));

app.get('/', function (req, res) {
    const url = `biodata?name=${biodata.nama}&tempat_lahir=${biodata.tempatLahir}&tanggal_lahir=${biodata.tanggalLahir}&alamat=${biodata.alamat}`;

    res.send(`
    <h1>Selamat datang di Tugas Express.js!</h1>
    <h2>Contoh menggunakan method GET</h2>
    <p>GET: <a href="${encodeURI(url)}">/${encodeURI(url)}</a></p>
    <h2>Contoh menggunakan method POST</h2>
    <p>POST: /biodata</p>
    <table border="1" width="400">
        <tr>
            <th>Key</th>
            <th>Value</th>
        </tr>
        <tr>
            <td>name</td>
            <td>Nama Anda</td>
        </tr>
        <tr>
            <td>tempat_lahir</td>
            <td>Tempat Lahir Anda</td>
        </tr>
        <tr>
            <td>tanggal_lahir</td>
            <td>Tanggal Lahir Anda</td>
        </tr>
        <tr>
            <td>alamat</td>
            <td>Alamat Anda</td>
        </tr>
    </table>
    <p>Gunakan Postman untuk request body x-www-form-urlencoded</p>
    `);
});

app.use('/biodata', routes);

const server = app.listen(port, function () {
    console.log('listening on port ' + port);
});
