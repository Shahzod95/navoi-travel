const { VirtualTour } = require("../models")
const sharp = require("sharp")

const addVirtualTour = async (req, res) => {
    const id = req.params.id

    const images = []

    req.files.map(i => {
      images.push(i.path)   
    })
  
    let data = {
        point_id: id,
        virtual_images:images,
        thumbnail:images,
    }
    const virtualTour = await VirtualTour.create(data)
    res.status(201).json({
        message:"Success",
        virtualTour
    })
}

const getVirtualTour = async (req, res) => {
    try {
        const virtualTours = await VirtualTour.findAll()
    
        res.status(200).json({
            message:"success",
            virtualTours
        })
        
      } catch (error) {
        res.send(error)
      }

}

module.exports = {
    addVirtualTour,
    getVirtualTour
}