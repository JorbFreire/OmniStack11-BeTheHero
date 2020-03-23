const express = require('express');
const app = express();

app.get('/', (req, res) => {
  return res.json({world: "bye"});
})

app.listen(3333);

console.log("online XD");