const service = require("../models/service")

exports.serviceCreate = async function (req, res, next) {
    try {
      if (!req.body.price || !req.body.servicename || !req.body.stationid) {
        throw new Error('pleace enter valid fields')
      }
      const data = await service.create(req.body)
      
      res.status(201).json({  
        message: "user signup successful",
        data: data
      })
    }
    catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
}

exports.serviceFind = async function (req, res, next) {
  try {
    const data = await service.find().populate(['stationid'])

    res.status(200).json({
      status: "success",
      message: "data found successfull",
      data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }

}

exports.serviceUpdate =  async function (req, res, next) { 
    try {
      await service.findByIdAndUpdate(req.query.id , req.body)
  
      res.status(201).json({
        status: "success",
        message: "data update successfull"
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}

exports.serviceDelete = async function (req, res, next) {
    try {
      const data = await service.findByIdAndDelete(req.query.id)
  
      res.status(200).json({
        status: "success",
        message: "data delete successfull",
        data
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
}

