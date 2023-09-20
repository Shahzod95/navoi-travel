const { VirtualTour } = require("../models");
const { Point } = require("../models/point.Model");
const fs = require("fs")
const path = require("path")

//Method:     GET
//Descr:      Get all points
const getAllPoints = async (req, res) => {
    try {
      const points = await Point.findAll()
      
      res.status(200).json({
        message: 'success',
        points: points.reverse()
      })
    } catch (err) {
      res.send(err)
    }
  }
  
  //Method:     GET
  //Descr:      Get one point by id
  const getPointById = async (req, res) => {
    try {
      const point = await Point.findByPk(req.params.id)
      if(!point){
        return res.status(404).json({
          message: 'Not found'
        })
      }
  
      return res.status(200).json({
        message: 'success',
        point
      })
    } catch (err) {
      res.send(err)
    }
  }
  
  //Method:     POST
  //Descr:      Add new point
  const addPoint = async (req, res) => {
    try {
  
      const newPoint = await Point.create({
        title:req.body.title,
        title_ru:req.body.title_ru,
        title_uz:req.body.title_uz, 
        latlon:req.body.latlon, 
        url:req.body.url, 
        address:req.body.address,
        address_ru:req.body.address_ru, 
        address_uz:req.body.address_uz,  
        history:req.body.history,
        history_ru:req.body.history_ru,
        history_uz:req.body.history_uz, 
        main_img_url:req.file.path, 
        video_url:req.body.video_url, 
        year:req.body.year, 
        visible:req.body.visible
      })
  
      res.status(201).json({
        message: 'success',
        newPoint
      })
    } catch (err) {
      res.send(err)
    }
  }
  
  //Method:     PUT
  //Descr:      Edit point by its ID
  const updatePoint = async (req, res) => {
    try {      
      const updatedPoint = await Point.findByIdAndUpdate(req.params.id)
      if(updatePoint) {
        let oldMain = updatePoint.main_img_url
        if(req.file){
          oldMain = req.file.path
          fs.unlink(path.join(__dirname, "../", updatePoint.main_img_url), (err, data) => {
            if(err){
                console.log(err)
            } else {
                console.log("Remove main image in point")
            }
        })
        }
        updatePoint.update({
          title:req.body.title,
          title_ru:req.body.title_ru,
          title_uz:req.body.title_uz, 
          latlon:req.body.latlon, 
          url:req.body.url, 
          address:req.body.address,
          address_ru:req.body.address_ru, 
          address_uz:req.body.address_uz,  
          history:req.body.history,
          history_ru:req.body.history_ru,
          history_uz:req.body.history_uz, 
          main_img_url:oldMain, 
          video_url:req.body.video_url, 
          year:req.body.year, 
          visible:req.body.visible
        })
    
        res.status(200).json({
          message: 'success',
          updatedPoint
        })
      } else {
        return res.status(404).json({
          message:"Point not found"
      })
      }
      
    } catch (err) {
      res.send(err)
    }
  }
  
  //Method:     DELETE
  //Descr:      Removing point by ID
  const removePoint = async (req, res) => {
    try {
      const point = await Point.findByPk(req.params.id);
    if (point) {
      const {main_img_url} = point
          if(main_img_url){
              fs.unlink(path.join(__dirname, "../", main_img_url), (err, data) => {
                  if(err){
                      console.log(err)
                  } else {
                      console.log("Remove main image in point")
                  }
              })
          }
      await point.destroy();
      res.json({ message: 'Point deleted' });
    } else {
      res.status(404).json({ message: 'Point not found' });
    }
      
    } catch (error) {
     return res.send(error) 
    }
  }

  const getPointVirtualTour =  async (req, res) => {

    const id = req.params.id
  
    const data = await Point.findAll({
        include: [{
            model: VirtualTour,
            as: 'virtualtour'
        }],
        where: { id: id }
    })
  
    res.status(200).send(data)
  
  }
  
  module.exports = {
    getAllPoints,
    getPointById,
    addPoint,
    updatePoint,
    removePoint,
    getPointVirtualTour
  }