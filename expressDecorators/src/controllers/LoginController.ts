import { Request, Response, NextFunction } from "express";
import { get, controller, use, bodyValidator, post } from "./decorators";

function logger(req: Request, res: Response, next: NextFunction) {
  console.log("Request was made");
  next();
}
@controller("/auth")
class LoginController {
  @get("/login")
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method='POST'>
      <div>
        <label>Email</label>
        <input name='email'/>
      
      </div>
      <div>
        <label>Password</label>
        <input name='password' type='password'/>
      </div>
      <button>Submit</button>
      
      </form>
    
    `);
  }
  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    if (email && password && email === "a@a.a" && password === "111") {
      //mark this person as logged in
      req.session = { loggedIn: true };
      //redirect to root route
      res.redirect("/");
    } else {
      res.json({ msg: "Invalid email or password" });
    }
    // res.json({ email: email?.toUpperCase(), password });
  }
  @get("/logout")
  getLogout(req: Request, res: Response) {
    if (req.session?.loggedIn) {
      req.session = { loggedIn: undefined };
      res.redirect("/");
    } else {
      res.send(`
      <div>
        <div>You are not logged in</div>
        <a href='/login'>Login</a>
      </div>
      `);
    }
  }
}
