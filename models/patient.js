var mongoose = require('mongoose');
var Schema = new mongosose.Schema;

var PatientSchema = new Schema({
    identityCard_number: String,
    fname: String,
    lname: String,
    sexe: String,
    addresse:String,
    phoneNumber: String,
    dBirth: Date,
    groupBlood: String
})

module.exports = mongosose.model('Patient',PatientSchema);