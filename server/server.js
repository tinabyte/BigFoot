const express = require('express');
const multer = require('multer');
const csvParser = require('csv-parser');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
    const filePath = './data/bfro_reports_geocoded.csv';
    const results = [];

    fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (row) => results.push(row))
        .on('end', () => {
            res.json(results);
            fs.unlink(filePath, (err) => {
                if (err) console.error('Error removing file:', err);
            });
        });
});

app.listen(3000, () => console.log('Server is running on port 3000'));
