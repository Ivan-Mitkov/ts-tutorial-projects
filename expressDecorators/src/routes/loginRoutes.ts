import { Router, Request, Response, NextFunction } from "express";
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}
const router = Router();

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session?.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send("Not permited");
}


router.post("/login", (req: RequestWithBody, res: Response) => {
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
});

router.get("/", (req: Request, res: Response) => {
  //check if logged
  if (req.session?.loggedIn) {
    res.send(`
    <div>
      <div>You are logged in</div>
      <a href='/logout'>Logout</a>
    </div>
    `);
  } else {
    res.send(`
    <div>
      <div>You are not logged in</div>
      <a href='/login'>Login</a>
    </div>
    `);
  }
});

router.get("/logout", (req: Request, res: Response) => {
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
});

router.get('/protected',requireAuth,(req:Request,res:Response)=>{
res.json({msg:'Welcome to protected route'})
})

export { router };
