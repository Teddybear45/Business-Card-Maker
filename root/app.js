const config = require("./util/config");
const express = require("express");
const usersRouter = require("./controllers/users");
const middleware = require("./util/middleware");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(middleware);

// app.use((req, res, next) => {
//   const jwt = require("jsonwebtoken");
//   console.log(req.headers["authorization"]);

//   // Read the JWT access token from the request header
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   if (token == null) return res.sendStatus(401); // Return 401 if no token
//   console.log(config.USERFRONT_PUBLIC_KEY);
//   // Verify the token using the Userfront public key
//   jwt.verify(token, config.USERFRONT_PUBLIC_KEY, (err, auth) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(403);
//     } // Return 403 if there is an error verifying
//     req.auth = auth;
//     next();
//   });
// });

app.use("/api/users", usersRouter);

module.exports = app;
