const { Event } = require("../models/event.Model");
const fs = require("fs")
const path = require("path")

const getEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.json({
      message:"success",
      events: events.reverse()
    });
    
  } catch (error) {
    res.send(error)
  }
}

const getEventById = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if(!event){
      return res.status(404).json({
          message: 'Not found'
          })
    }
    res.json({
      message:"success",
      event
    });
    
  } catch (error) {
    res.send(error)
  }
}

const createEvent = async (req, res) => {
  try {
    const event = await Event.create({
      title: req.body.title,
      header_img: req.file.path,
      description: req.body.description
    });
   
    res.json({
      message:"success",
      event
    });
    
  } catch (error) {
    res.send(error)
  }
};

const updateEvent = async (req, res) => {
  const event = await Event.findByPk(req.params.id);
  if (event) {
    let oldMain = event.header_img
        if(req.file){
          oldMain = req.file.path
          fs.unlink(path.join(__dirname, "../", event.header_img), (err, data) => {
            if(err){
                console.log(err)
            } else {
                console.log("Remove header image in event")
            }
        })
        }
    await event.update({...req.body, header_img:oldMain});
    res.json(event);
  } else {
    res.status(404).json({ message: 'Event not found' });
  }
}

const deleteEvent = async (req, res) => {
  const event = await Event.findByPk(req.params.id);
  if (event) {
    const {header_img} = event
          if(header_img){
              fs.unlink(path.join(__dirname, "../", header_img), (err, data) => {
                  if(err){
                      console.log(err)
                  } else {
                      console.log("Remove header image in event")
                  }
              })
          }
    await event.destroy();
    res.json({ message: 'Event deleted' });
  } else {
    res.status(404).json({ message: 'Event not found' });
  }
}

module.exports = {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent
}