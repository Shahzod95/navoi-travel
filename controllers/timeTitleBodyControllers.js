const { TimeTitleBody } = require("../models");

const addTimeTitleBody = async (req, res) => {
    const id = req.params.id
    let data = {
        tour_route_pass_time_id: id,
        subject:req.body.subject,
        subject_ru: req.body.subject_ru,
        subject_uz: req.body.subject_uz,
        subject_description: req.body.subject_description,
        subject_description_ru: req.body.subject_description_ru,
        subject_description_uz: req.body.subject_description_uz,
    }
    const tour_route = await TimeTitleBody.create(data)
    res.status(200).send(tour_route)
}

const getAllTimeTitleBodies = async (req, res) => {

    const tour_routes = await TimeTitleBody.findAll({})
    res.status(200).send(tour_routes)

}

module.exports = {
    addTimeTitleBody,
    getAllTimeTitleBodies
}