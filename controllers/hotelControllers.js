const { Hotel, Review } = require("../models");
const fs = require("fs")
const path = require("path")


const getHotel = async (req, res) => {
  const hotels = await Hotel.findAll();
  res.json(hotels);
}

const getHotelById = async (req, res) => {
  const hotel = await Hotel.findByPk(req.params.id);
  res.json(hotel);
}

const createHotel = async (req, res) => {
  const hotel = await Hotel.create({
    title:req.body.title,
    title_ru:req.body.title_ru,
    title_uz:req.body.title_uz,
    room:req.body.room,
    room_ru:req.body.room_ru,
    room_uz:req.body.room_uz,
    types:req.body.types,
    types_ru:req.body.types_ru,
    types_uz:req.body.types_uz,
    img_url:req.file.path
  });
  res.json(hotel);
};

const updateHotel = async (req, res) => {
  const hotel = await Hotel.findByPk(req.params.id);
  if (hotel) {
    let oldImg = hotel.img_url
    if(req.file){
      oldImg = req.file.path
      fs
        .unlink(path.join(__dirname, "../", hotel.img_url), (err, data) => {
          if(err){
            console.log(err)
          } else {
            console.log("Reamove image in hotel")
          }
        })
    }
    await hotel.update({
      title:req.body.title,
      title_ru:req.body.title_ru,
      title_uz:req.body.title_uz,
      room:req.body.room,
      room_ru:req.body.room_ru,
      room_uz:req.body.room_uz,
      types:req.body.types,
      types_ru:req.body.types_ru,
      types_uz:req.body.types_uz,
      img_url:oldImg
    });
    res.status(200).json({
      message:"Success",
      hotel
    });
  } else {
    res.status(404).json({ message: 'Hotel not found' });
  }
}

const deleteHotel = async (req, res) => {
  const hotel = await Hotel.findByPk(req.params.id);
  if (hotel) {
    const {img_url} = hotel
          if(img_url){
              fs.unlink(path.join(__dirname, "../", img_url), (err, data) => {
                  if(err){
                      console.log(err)
                  } else {
                      console.log("Remove header image in travel")
                  }
                })
              }
    await hotel.destroy();
    res.json({ message: 'Event deleted' });
  } else {
    res.status(404).json({ message: 'Event not found' });
  }
}

const getHotelReviews =  async (req, res) => {

  const id = req.params.id

  const data = await Hotel.findAll({
      include: [{
          model: Review,
          as: 'review'
      }],
      where: { id: id }
  })


  res.status(200).send(data)

}

module.exports = {
  getHotel,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel,
  getHotelReviews
}