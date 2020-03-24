const express = express();

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({world: "bye"});
})

module.exports = routes;