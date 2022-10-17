require("dotenv").config();
module.exports = {
    mongoURI: `mongodb+srv://thomas:${process.env.DB_PASSWORD}@cluster0.bcamklc.mongodb.net/test`,
    secretOrKey: "secret"
};