const usersRouter = require("express").Router();

// usersRouter.get("/", async (req, res) => {


//   res.json(req.auth);

// });
usersRouter.get("/", async (req, res) => {
  console.log(req.auth);

  


  res.json("hello world");
});

module.exports = usersRouter;
