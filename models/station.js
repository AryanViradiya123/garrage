const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stationdata = new Schema({
  username: String,
  email:String,
  password: String
});

const station = mongoose.model('station',stationdata)
module.exports=station