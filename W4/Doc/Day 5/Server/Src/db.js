const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB successfully");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });
