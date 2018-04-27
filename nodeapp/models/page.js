var mongoose = require('mongoose');

var PageSchema = mongoose.Schema({
    title : {
        type : String
    },
    slug : {
        type : String
    },
    content : {
        type : String
    },
    lastEditedBy: {
        type : String
    },
    lastEditedDate: {
        type : Date
    },
})

var Page = module.exports = mongoose.model("Page", PageSchema);