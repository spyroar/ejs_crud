import express from "express";
import router from "./routes/routes.js";
import ejs from "ejs";
import path from "path";
import dotenv from "dotenv";
import { connectDB } from "./connectDB/connectdb.js";
import bodyParser from "body-parser";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
dotenv.config();
connectDB();
// set up satic files
app.use(express.static(path.join(process.cwd(), "/public")));
// setup template engine
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.json());
//routes
app.use(router);
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
