// const async = require("async");
const config = require("../Utilities/config").config;
const UserDAO = require('../DAO/userDAO');
const BankDAO = require('../DAO/bankDAO');
const AdminDAO= require('../DAO/adminDAO')
const BankUser= require('../DAO/bankSignupDAO')
const Bank = require('../Models/Bank')
const User = require('../Models/User')
const GetAccount=require('../Models/BankSignup')
const Type=require('../Models/accounttype')
const MD5 = require('md5');

/* API to register new user */
let register = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(401).json({message:'Parameters are missing'})
  } else {
    try {
      let criteria = {
        email: req.body.email
      } 
      const checkEmail = await UserDAO.getUsers(criteria);
      if (checkEmail && checkEmail.length==1) {
        res.status(401).json({message:'email already registered'})
      } else {
        let userData = {
          firstName: req.body.firstName ? req.body.firstName : "",
          lastName: req.body.lastName ? req.body.lastName : "",
          email: req.body.email,
          phone: req.body.phone,
          gender:req.body.gender,
          dob:req.body.dob,
          country:req.body.country,
          state:req.body.state,
          city:req.body.city,
          password: MD5(MD5(req.body.password)),
          status: true
        };
        const addUser = await UserDAO.createUser(userData);
        // console
        if (addUser) {
          res.status(200).json({message:'User registered successfully!'})
        } else {
          res.status(403).json({message:"Something went wrong"});
        }
      }
    } catch (error) {
      res.status(404).json({message:"Something went wrong",error:error});
    }
  }
};

/*API to register Bank */
let registerbank= async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(401).json({message:'Parameters are missing'})
  } else {
    try {
      let criteria = {
        email: req.body.email
      } 
      const checkEmail = await BankDAO.getBanks(criteria);
      if (checkEmail && checkEmail.length==1) {
        res.status(401).json({message:'email already registered'})
      } else {
        let bankuserData = {
          firstName: req.body.firstName ? req.body.firstName : "",
          lastName: req.body.lastName ? req.body.lastName : "",
          email: req.body.email,
          phone: req.body.phone,
          bankName:req.body.bankName,
          branch:req.body.branch,
          password: MD5(MD5(req.body.password)),
          status: true
        };
        const addBank = await BankDAO.createBank(bankuserData);
        // console
        if (addBank) {
          res.status(200).json({message:'Bank registered successfully!'})
        } else {
          res.status(403).json({message:"Something went wrong"});
        }
      }
    } catch (error) {
      res.status(404).json({message:"Something went wrong",error:error});
    }
  }
};

/* API to login user */
let login = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(401).json({message:'Parameters are missing'});
  } else {
    try {
      let criteria = {
        email: req.body.email,
        status: true
      };
      const checkEmail = await UserDAO.getUsers(criteria);
      if (checkEmail && checkEmail.length>0) {
        let criteria = {
          email: req.body.email,
          password: MD5(MD5(req.body.password))
        };
        const checkPassword = await UserDAO.getUsers(criteria);
        if (checkPassword && checkPassword.length==1) {
          res.status(200).json({message:'Logged in successfully!',result:checkPassword[0],token:'dummy-jwt-token-for-now'});
        } else {
          res.status(401).json({message:'Incorrect password'});
        }
      } else {
        res.status(401).json({message:'Email not exist!'});
      }
    } catch (error) {
      res.status(401).json({message:'Something went wrong',error:error});
    }
  }
};

/* API to Adminlogin user */
let Adminlogin=async (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(401).json({message:'Parameters are missing'});
  } else {
    try {
        let criteria = {
          username: req.body.username,
          password: req.body.password
        };
        const checkPassword = await AdminDAO.getAdmin(criteria);
        if (checkPassword && checkPassword.length==1) {
          res.status(200).json({message:'Logged in successfully!',result:checkPassword[0],token:'dummy-jwt-token-for-now'});
        } else {
          res.status(401).json({message:'Incorrect password'});
        }
     
    } catch (error) {
      res.status(401).json({message:'Something went wrong',error:error});
    }
  }
};
/* API to Banklogin user */
let Banklogin = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(401).json({message:'Parameters are missing'});
  } else {
    try {
      let criteria = {
        email: req.body.email,
        status: true
      };
      const checkEmail = await BankDAO.getBanks(criteria);
      if (checkEmail && checkEmail.length>0) {
        let criteria = {
          email: req.body.email,
          password: MD5(MD5(req.body.password))
        };
        const checkPassword = await BankDAO.getBanks(criteria);
        if (checkPassword && checkPassword.length==1) {
          res.status(200).json({message:'Logged in successfully!',result:checkPassword[0],token:'dummy-jwt-token-for-now'});
        } else {
          res.status(401).json({message:'Incorrect password'});
        }
      } else {
        res.status(401).json({message:'Email not exist!'});
      }
    } catch (error) {
      res.status(401).json({message:'Something went wrong',error:error});
    }
  }
};

let getbank=(req,res)=>{
  console.log(req.body);
  Bank.find({},(err, user) => {
    if (err) {
        console.log(err)
    }
    else {
      res.json({ success: true, msg: "Banks .", data: user })
    }
});
}

let getmyAccount=(req,res)=>{
  console.log(req.body);
  console.log(req.body.name)
  GetAccount.find({name:'rahul'},(err, user) => {
    if (err) {
        console.log(err)
    }
    else {
      res.json({ success: true, msg: "Bankssss .", data: user })
    }
});
}


/* Get all the user details */
let getallusers=(req,res)=>{
  console.log(req.body);
  User.find({},(err, user) => {
    if (err) {
        console.log(err)
    }
    else {
      res.json({ success: true, msg: "Users .", data: user })
    }
});
}

/* Get type of account */
let gettype=(req,res)=>{
  console.log(req.body);
  Type.find({},(err, user) => {
    if (err) {
        console.log(err)
    }
    else {
      res.json({ success: true, msg: "accountTypes .", data: user })
    }
});
}

let updatebalance=(req,res)=>{
  console.log(req.body);
  console.log(req.body.bal)
  GetAccount.updateOne({accountnumber:54655},{$set : {balance:4500}},(err, user) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("EMP Added into the Data Base ...");
        
        res.json({ success: true, msg: "All Employees in Ibm .", data: user })
    }
});
}

let banksignup=async (req, res) => {
  if (!req.body.accountnumber) {
    res.status(401).json({message:'Parameters are missing'})
  } else {
   // try {
    //  let criteria = {
      ////  accountnumber: req.body.accountnumber
    //  } 
    //  const checkAccountNumber = await BankSignupDAO.createBankUser(criteria);
    //  if (checkAccountNumber && checkAccountNumber.length==1) {
    //    res.status(401).json({message:'Account number already registered'})
    //  } else {
        let bankuserData = {
          AccountType: req.body.AccountType? req.body.AccountType : "",
          bankName: req.body.bankName ? req.body.bankName : "",
          branch: req.body.branch,
          accountnumber: req.body.accountnumber,
          name:req.body.name,
          phone:req.body.phone,
          status: true
        };
        const addBank = await BankUser.createBankUser(bankuserData);
        // console
        if (addBank) {
          res.status(200).json({message:'Bank registered successfully!'})
        } else {
          res.status(403).json({message:"Something went wrong"});
        }
    //  }
   /* } catch (error) {
      res.status(404).json({message:"Something went wrong",error:error});
    }*/
  }
};





module.exports = {
  register: register,
  login: login,
  registerbank:registerbank,
  Banklogin:Banklogin,
  getbank:getbank,
  banksignup:banksignup,
  gettype:gettype,
  Adminlogin:Adminlogin,
  getallusers:getallusers,
  getmyAccount:getmyAccount,
  updatebalance:updatebalance
  
}