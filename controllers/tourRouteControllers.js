const { TourRoute, TourRoutePassTime } = require("../models");

const addTourRoute = async (req, res) => {
    const id = req.params.id
    const images = []
    req.files.map(i => {
      images.push(i.path)
    })
    let data = {
        travel_id: id,
        title: req.body.title,
        title_ru: req.body.title_ru,
        title_uz: req.body.title_uz,
        img_list: images
    }
    const tour_route = await TourRoute.create(data)
    res.status(200).send(tour_route)
}

const getAllTourRoutes = async (req, res) => {

    const tour_routes = await TourRoute.findAll({})
    res.status(200).send(tour_routes)

}


const getTourePassTimes =  async (req, res) => {

    const id = req.params.id
  
    const data = await TourRoute.findAll({
        include: [{
            model: TourRoutePassTime,
            as: 'tourroutepasstime'
        }],
        where: { tour_route_id: id }
    })
  
    res.status(200).send(data)
  
  }

module.exports = {
    addTourRoute,
    getAllTourRoutes,
    getTourePassTimes
}