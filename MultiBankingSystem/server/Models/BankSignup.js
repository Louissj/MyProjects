var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let BankSignup = new Schema({
    AccountType: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    bankName: {
        type: String,
        trim: true,
        default: null
    },

    accountnumber:{
        type: Number,
        trim: true,
        lowercase: true
    },
    name: {
        type: String,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        trim: true,
        select:false
    },
    status: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    balance:{
        type:Number,
        default:5000
    }
});


module.exports = mongoose.model('BankSignup', BankSignup);
