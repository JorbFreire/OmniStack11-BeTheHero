const express = require('express');

const routes = express.Router();

routes.get('/ong', (request, response) => {
  const data = request.body;

  console.log(data);
  return res.json({world: "bye"});
})

module.exports = routes;