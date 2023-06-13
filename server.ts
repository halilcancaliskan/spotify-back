import express, { Request, Response } from 'express';

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://spotifyback:spotifyback@clusterspotify.nw1zahb.mongodb.net/';

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Serveur Express écoutant sur le port ${port}`);
});
