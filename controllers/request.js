const request = require("../models/request")

exports.requestCreate = async function (req, res, next) {
    try {
      const data = await request.create(req.body)
      
      res.status(201).json({  
        message: "request successful",
        data: data
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
}

exports.requestFind = async function (req, res, next) {
  try {
    const data = await request.find().populate(['userid' , 'stationid' , 'serviceid'])

    res.status(200).json({
      status: "success",
      message: "request found successfull",
      data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }

}

exports.requestUpdate =  async function (req, res, next) { 
    try {
      await request.findByIdAndUpdate(req.query.id , req.body)
  
      res.status(201).json({
        status: "success",
        message: "request update successfull"
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}

exports.requestDelete = async function (req, res, next) {
    try {
      const data = await request.findByIdAndDelete(req.query.id)
  
      res.status(200).json({
        status: "success",
        message: "request delete successfull",
        data
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}

