// const resourceRoutes = require("./resource");
const jsonServer = require('json-server');
const middlewares = jsonServer.defaults();
const router = jsonServer.router('data.json');


// // resources routes
// router.use("/resourece", resourceRoutes);

module.exports = router;