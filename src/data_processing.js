const Node = require('./node').Node;

const fs = require('fs');
const csv = require('csv-parser');

let bigfoot_sightings = [];

fs.createReadStream('../data/bfro_reports_geocoded.csv')
    .pipe(csv())
    .on('data', (row) => {
        bigfoot_sightings.push(new Node(row));
    })
    .on('end', () => {
        console.log(bigfoot_sightings[0].observed); // Testing to see if the data is loaded properly
    });

module.exports.bigfoot_sightings = bigfoot_sightings;
