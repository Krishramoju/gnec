
module.exports = {
  mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/food-donation",
  jwtSecret: process.env.JWT_SECRET || "default_jwt_secret",
  port: process.env.PORT || 5000,
};
