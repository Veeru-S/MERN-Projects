const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://veeru:<db_password>@cluster0.n5ozt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
