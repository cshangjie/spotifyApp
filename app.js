const express = require('express');
var app = express();
const webAPI = require('spotify-web-node');
const querystring = require('querystring');
app.get('/login', function(req,res){
    
});
app.get('/login', function(req, res) {

    var state = generateRandomString(16);
    var scope = 'user-read-private user-read-email';
  
    res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
      }));
  });

// client info
let client_id = '';
let client_secret = '';
let redirect_uri = 'https://localhost:8888/callback';
