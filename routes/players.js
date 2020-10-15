var express = require('express');
const axios = require('axios');
var router = express.Router();

const instance = axios.create({
  baseURL:  'http://api.football-data.org/v2',
  headers: {'X-Auth-Token': '3eec30c0ebb242a19c4e7543504823cc'}
});


router.get('/', async function(req, res, next) {
  try{
    const result =  await instance.get('/players/3141');
    res.json(result.data);

  }catch(err){
    console.error(err);

  }
});

module.exports = router;
