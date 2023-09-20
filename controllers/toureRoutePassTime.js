const { TourRoutePassTime, TimeTitleBody } = require("../models");

const addTourRoutePassTime = async (req, res) => {
    const id = req.params.id
    let data = {
        tour_route_id: id,
        time:req.body.time,
        time_header_title: req.body.time_header_title,
        time_header_title_ru: req.body.time_header_title_ru,
        time_header_title_uz: req.body.time_header_title_uz,
    }
    const tour_route = await TourRoutePassTime.create(data)
    res.status(200).send(tour_route)
}

const getAllTourRoutePassTimes = async (req, res) => {

    const tour_routes = await TourRoutePassTime.findAll({})
    res.status(200).send(tour_routes)

}

const getTimeTitleBodyById =  async (req, res) => {

    const id = req.params.id
  
    const data = await TourRoutePassTime.findAll({
        include: [{
            model: TimeTitleBody,
            as: 'timetitlebody'
        }],
        where: { tour_route_pass_time_id: id }
    })
  
    res.status(200).send(data)
  
  }

module.exports = {
    addTourRoutePassTime,
    getAllTourRoutePassTimes,
    getTimeTitleBodyById
}