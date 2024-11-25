import express from "express";
import router from "./routes/routes.js";
import ejs from "ejs";
import path from "path";
const app = express();
const PORT = 4000;
// set up satic files
app.use(express.static(path.join(process.cwd(), "/public")));
// setup template engine
app.set("view engine", "ejs");
app.set("views", "./views");

//routes
app.use("/api/user", router);
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
