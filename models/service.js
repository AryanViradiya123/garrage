const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicedata = new Schema({
  price: Number,
  servicename:String,
  stationid : {
    type: Schema.Types.ObjectId, ref: 'station'
  }
});

const service = mongoose.model('service',servicedata)
module.exports=service