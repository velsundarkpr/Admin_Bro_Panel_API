const express = require('express');
const {Insights} = require('./companies/company.entity')
const app = express()
const port = 4000;


const Api =async ()=>{
  //API Endpoint
  app.get('/api/data',async(req, res) => {
    try {
      const data = await Insights.find();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({error: 'Internal Server Error'});
    }
  });
  app.listen(port, () => {
    console.log(`Api Runs On ${port}`)
  })
}
module.exports = Api;
