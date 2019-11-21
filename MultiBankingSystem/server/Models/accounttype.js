var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let accounttype = new Schema({
    AccountType: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
});


module.exports = mongoose.model('accounttype', accounttype);