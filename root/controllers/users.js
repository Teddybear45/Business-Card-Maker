
const usersRouter = require("express").Router();

// should be async
usersRouter.get("/", async (req, res) => {
  
  
  
  res.json("hello world");


});

module.exports = usersRouter;
