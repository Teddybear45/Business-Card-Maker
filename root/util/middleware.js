require("dotenv");
const jose = require("jose");

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  const publicKey = process.env.USERFRONT_PUBLIC_KEY;
  // Verify the JWT access token
  console.log(publicKey);
  console.log(token);
  const { payload } = await jose.jwtVerify(token, publicKey, {
    algorithms: ["RS256"],
  });

  console.log(payload);

  next();
};

module.exports = verifyToken;
