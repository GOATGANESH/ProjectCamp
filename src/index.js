import dotenv from "dotenv";
import connectDB from "./db/dbconnection.js";
import app from "./app.js";

dotenv.config({
  path: "./.env",
});
const port = process.env.PORT || 3000;
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on the port http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDBa failed : ", err);
  });
