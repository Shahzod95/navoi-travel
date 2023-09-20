const { TourRoute, HighLight } = require('../models')
const { Travel } = require('../models/travel.Model')
const fs = require("fs")
const path = require("path")

//Method:     GET
//Descr:      Get all travels books
const getAllTravels = async (req, res) => {
  try {
    const travels = await Travel.findAll()
    res.status(200).json({
      message: 'success',
      travels: travels.reverse()
    })
  } catch (err) {
    res.send(err)
  }
}

//Method:     GET
//Descr:      Get one travel book by id
const getTravelById = async (req, res) => {
  try {
    const travel = await Travel.findByPk(req.params.id)

    if(!travel){
      return res.status(404).json({
        message: 'Not found'
      })
    }

    return res.status(200).json({
      message: 'success',
      travel
    })
  } catch (err) {
    res.send(err)
  }
}

//Method:     POST
//Descr:      Add new travel book
const addTravelBook = async (req, res) => {
  try {
    const newTravel = await Travel.create({
      title:req.body.title,
      title_ru:req.body.title_ru,
      title_uz:req.body.title_uz,
      header_img:req.file.path,
      price:req.body.price,
      location:req.body.location,
      location_ru:req.body.location_ru,
      location_uz:req.body.location_uz,
      durations:req.body.durations,
      durations_ru:req.body.durations_ru,
      durations_uz:req.body.durations_uz,
      types:req.body.types,
      types_ru:req.body.types_ru,
      types_uz:req.body.types_uz,
      description:req.body.description,
      description_ru:req.body.description_ru,
      description_uz:req.body.description_uz,
    })
    res.status(201).json({
      message: 'success',
      newTravel
    })
  } catch (err) {
    res.send(err)
  }
}

//Method:     PUT
//Descr:      Edit travel book by its ID
const updateTravelBook = async (req, res) => {
  try {
    const updatedTravel = await Travel.findByPk(req.params.id)

    let oldHeaderImg = updatedTravel.header_img
    if(req.file){
      oldHeaderImg = req.file.path
      fs.unlink(path.join(__dirname, "../", updatedTravel.header_img), (err, data) => {
        if(err){
            console.log(err)
        } else {
            console.log("Remove header image in travel")
        }
    })
    }
    
      await updatedTravel.update({
        title:req.body.title,
        title_ru:req.body.title_ru,
        title_uz:req.body.title_uz,
        header_img:oldHeaderImg,
        price:req.body.price,
        location:req.body.location,
        location_ru:req.body.location_ru,
        location_uz:req.body.location_uz,
        durations:req.body.durations,
        durations_ru:req.body.durations_ru,
        durations_uz:req.body.durations_uz,
        types:req.body.types,
        types_ru:req.body.types_ru,
        types_uz:req.body.types_uz,
        description:req.body.description,
        description_ru:req.body.description_ru,
        description_uz:req.body.description_uz,
      });
     
      res.status(200).json({
        message: 'success',
        updatedTravel
      }) 
  } catch (err) {
    res.send(err)
  }
}

//Method:     DELETE
//Descr:      Removing travel book by ID
const removeTravelBook = async (req, res) => {
    const travel = await Travel.findByPk(req.params.id)
    if (travel) {
      const {header_img} = travel
          if(header_img){
              fs.unlink(path.join(__dirname, "../", header_img), (err, data) => {
                  if(err){
                      console.log(err)
                  } else {
                      console.log("Remove header image in travel")
                  }
              })
          }
      await travel.destroy();
      res.status(200).json({ message: 'Travel deleted' });
    } else {
      res.status(404).json({ message: 'Travel not found' });
    }
}

const getTravelHighlights =  async (req, res) => {

  const id = req.params.id

  const data = await Travel.findAll({
      include: [{
          model: HighLight,
          as: 'highlight'
      }],
      where: { id: id }
  })

  res.status(200).send(data)

}

const getTravelTourRoutes =  async (req, res) => {

  const id = req.params.id

  const data = await Travel.findAll({
      include: [{
          model: TourRoute,
          as: 'tourroute'
      }],
      where: { id: id }
  })

  res.status(200).send(data)

}

module.exports = {
  getAllTravels,
  getTravelById,
  addTravelBook,
  updateTravelBook,
  removeTravelBook,
  getTravelTourRoutes,
  getTravelHighlights
}