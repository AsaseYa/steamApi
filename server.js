const express = require('express');
const mongoose = require('mongoose');
const request = require('request');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGODBURL = process.env.MONGODB;

mongoose.connect(MONGODBURL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;




app.get('/steam/ownedGames/:playerId', function(req, res) {
     const url = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/' + 'v0001/?key=BE958FD7DB676A23C8305A0D3E575D1F&steamid=' + req.params.playerId + '&include_appinfo=true&format=json'
     request.get(url, function(error, steamRes, steamHttpBody) {
          res.setHeader('content-type', 'application/json');
          res.send(steamHttpBody);
     })
})

//http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=YOU-API_KEY&vanityurl=USER_NAME

app.get('/steam/ownedGames/:playerUsername', function(req, res) {
     const url = 'http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=BE958FD7DB676A23C8305A0D3E575D1F&vanityurl=' + req.params.playerUsername + ''
     request.get(url, function(error, steamRes, steamHttpBody) {
          res.setHeader('content-type', 'application/json');
          res.send(steamHttpBody);
     })

})


connection.once('open', () => { console.log('MongoDB database connection established successfully')})
app.listen(PORT, () => {
     console.log(`Serveur sur port: ${PORT}`);
})