//This is the server

console.log('-----------------------');
console.log('-----------------------');
console.log('    ** NEW SERVER **   ');
console.log('-----------------------');
console.log('-----------------------');


console.log('Starting the server...');
console.log('-----------------------');
console.log('Importing packages ....');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
console.log('-----------------------');
console.log('Sean: All the necessary packages have been imported. You are now ready to rock.');

console.log('Defining app...');
const app = express();
console.log('App defined...');

//Start the app:;
console.log('Starting app...');
console.log('-----------------------');

app.use(cors());
console.log('Seán: The app is now running');

//Define the port;
const port = 5555;
console.log('Seán, the PORT has been defined as', port)

//Let the app listen
app.listen(port, function () {
    console.log('The app is now listening ;)')


    //Define first get function;

    app.get('/fetch_data', function (request, response) {
        console.log('The browser has requested data');

        var fetchDatabase = require("./database/videoLinks.json")
        return response.send({ fetchDatabase });
    });




}); // End of listen function

