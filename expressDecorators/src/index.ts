import express, { Request, Response } from "express";
import { AppRouter } from "./AppRouter";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import "./controllers/LoginController";
import "./controllers/RootController";

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieSession({ keys: ["khjhd"] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log("listen on port 3000");
});
