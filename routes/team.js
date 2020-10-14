var express = require('express');
const axios = require('axios');
var router = express.Router();
const instance = axios.create({
    baseURL:  'http://api.football-data.org/v2',
    headers: {'X-Auth-Token': '3eec30c0ebb242a19c4e7543504823cc'}
});

router.get('/', async (req, res, next) => {
  
    const result =  await instance.get('/teams');
    res.json(result.data);
    
});
   
  
router.get('/:id', async (req, res, next) => {
    
    //console.debug('/competitions/'+req.params.id)
    try{
      const result =  await instance.get('/teams/'+req.params.id);
      console.debug(result.data)
      res.json(result.data);
  
    }catch(err){
      console.error(err);
    }

});

module.exports = router;
