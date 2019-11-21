"use strict";

var Models = require("../Models/Bank");
var Sighnup = require("../Models/BankSignup")

const getBanks = criteria =>
  new Promise((resolve, reject) => {
    Models.find(criteria)
      .then(client => resolve(client))
      .catch(err => reject(err));
  });


  
const createBank = objToSave =>
  new Promise((resolve, reject) => {
    new Models(objToSave)
      .save()
      .then(client => resolve(client))
      .catch(err => {reject(err);
         console.log(err);
      });
  });

const bankSignup = objToSave =>
new Promise((resolve, reject) => {
  new Sighnup(objToSave)
    .save()
    .then(client => resolve(client))
    .catch(err => {reject(err);
       console.log(err);
    });
});


const updateBank = (criteria, dataToSet, options) =>
  new Promise((resolve, reject) => {
    options.lean = true;
    options.new = true;
    Models.findOneAndUpdate(criteria, dataToSet, options)
      .then(client => resolve(client))
      .catch(err => reject(err));
  });

const deleteBank = criteria =>
  new Promise((resolve, reject) => {
    Models.findOneAndRemove(criteria)
      .exec()
      .then(client => resolve(client))
      .catch(err => reject(err));
  });


module.exports = {
  updateBank: updateBank,
  createBank: createBank,
  deleteBank: deleteBank,
  getBanks: getBanks,
  bankSignup:bankSignup
};