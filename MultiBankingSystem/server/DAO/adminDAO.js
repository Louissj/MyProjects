"use strict";

var Models = require("../Models/Admin");

const getAdmin = criteria =>
  new Promise((resolve, reject) => {
    Models.find(criteria)
      .then(client => resolve(client))
      .catch(err => reject(err));
  });

  module.exports = {
    getAdmin: getAdmin
  };