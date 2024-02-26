const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestdata = new Schema({
  userid : {
    type: Schema.Types.ObjectId, ref: 'user',
    required : true
  },
  stationid : {
    type: Schema.Types.ObjectId, ref: 'station',
    required : true
  },
  serviceid : {
    type: Schema.Types.ObjectId, ref: 'service',
    required : true
  },
  Status: {
    type: String,
    enum : ["Pending","Accepet","Reject","Delete"],
    default : "Pending",
    required : true
  } 
});

const request = mongoose.model('request',requestdata)
module.exports=request