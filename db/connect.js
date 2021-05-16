const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect(
      "mongodb+srv://Oral_Screening:hesoyam12345@cluster0.h9aph.mongodb.net/Records?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((res) => {
      console.log("Connected to db");
    })
    .catch((err) => console.log("Failed to connect" + err));
};

module.exports = connect;
