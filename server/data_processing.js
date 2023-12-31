const Node = require('./classes/node.js').Node;

const fs = require('fs');
const csv = require('csv-parser');

let bigfoot_sightings = [];

fs.createReadStream('./data/bfro_reports_geocoded.csv')
    .pipe(csv())
    .on('data', (row) => {
        bigfoot_sightings.push(new Node(row));
    })
    .on('end', () => {
        console.log(bigfoot_sightings[0].latitude); // Testing to see if the data is loaded properly
        console.log(bigfoot_sightings[0].longitude); // Testing to see if the data is loaded properly
        console.log(bigfoot_sightings[1].latitude); // Testing to see if the data is loaded properly
        console.log(bigfoot_sightings[1].longitude); // Testing to see if the data is loaded properly
        console.log(bigfoot_sightings[2].latitude); // Testing to see if the data is loaded properly
        console.log(bigfoot_sightings[2].longitude); // Testing to see if the data is loaded properly
        console.log(bigfoot_sightings[3].latitude); // Testing to see if the data is loaded properly
        console.log(bigfoot_sightings[3].longitude); // Testing to see if the data is loaded properly
    });

module.exports.bigfoot_sightings = bigfoot_sightings;
//
// const Papa = require('papaparse');
// const csvFilePath = '../data/bfro_reports_geocoded.csv';
//
// const Graph = require("./classes/graph.js");

// Function to load CSV data and parse it using papaparse
// const loadCSVData = () => {
//     return new Promise((resolve, reject) => {
//         Papa.parse(csvFilePath, {
//             download: true,
//             header: true,
//             complete: (results) => {
//                 console.log(results)
//                 resolve(results.data);
//             },
//             // error: (error) => {
//             //     reject(error);
//             // },
//         });
//     });
// };

// module.exports = { loadCSVData };


