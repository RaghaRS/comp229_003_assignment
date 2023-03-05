let mongoose = require('mongoose');
let contactsModel = mongoose.Schema({
    name: String,
    number: Number,
    email: String,
 
},
    {
        collection: "contacts"
    });

module.exports = mongoose.model('contact', contactsModel);