const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    book:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    author:{
type:String,
require:true
    }

});
module.exports=mongoose.model('Book',bookSchema);