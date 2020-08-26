"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
function requireAuth(req, res, next) {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("Not permited");
}
router.post("/login", function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === "a@a.a" && password === "111") {
        //mark this person as logged in
        req.session = { loggedIn: true };
        //redirect to root route
        res.redirect("/");
    }
    else {
        res.json({ msg: "Invalid email or password" });
    }
    // res.json({ email: email?.toUpperCase(), password });
});
router.get("/", function (req, res) {
    var _a;
    //check if logged
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        res.send("\n    <div>\n      <div>You are logged in</div>\n      <a href='/logout'>Logout</a>\n    </div>\n    ");
    }
    else {
        res.send("\n    <div>\n      <div>You are not logged in</div>\n      <a href='/login'>Login</a>\n    </div>\n    ");
    }
});
router.get("/logout", function (req, res) {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        req.session = { loggedIn: undefined };
        res.redirect("/");
    }
    else {
        res.send("\n    <div>\n      <div>You are not logged in</div>\n      <a href='/login'>Login</a>\n    </div>\n    ");
    }
});
router.get('/protected', requireAuth, function (req, res) {
    res.json({ msg: 'Welcome to protected route' });
});
