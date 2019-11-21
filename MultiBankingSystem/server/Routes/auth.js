const express = require("express");
const router = express.Router({ mergeParams: true });
const authService = require("../Services/auth");

/* User Registration. */
router.post("/register", authService.register);
/*BAnk Registration */
router.post("/registerbank", authService.registerbank);
router.post("/banksignup", authService.banksignup);

/* User Login. */
router.post("/login", authService.login);
/* Bank user login */
router.post("/Banklogin", authService.Banklogin);
router.post("/Adminlogin", authService.Adminlogin);
router.get("/getbank", authService.getbank);
router.get("/gettype", authService.gettype);
router.get("/getallusers", authService.getallusers);
router.post("/getmyAccount", authService.getmyAccount);
//router.get("/getaccountnumber", authService.getaccountnumber);
router.put("/updatebalance", authService.updatebalance);
module.exports = router;