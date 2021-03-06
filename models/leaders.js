const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const leaderSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    abbr:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    featured: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
});

var leaders = mongoose.model("leader",leaderSchema);
module.exports = leaders;