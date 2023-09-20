const { Review } = require("../models");

const addReview = async (req, res) => {
    const id = req.params.id
    let data = {
        hotel_id: id,
        description: req.body.description,
        description_ru: req.body.description_ru,
        description_uz: req.body.description_uz,
        person_img:req.file.path,
        person_name:req.body.person_name,
        country_flag_code:req.body.country_flag_code,
        country_name:req.body.country_name,
        country_name_ru:req.body.country_name_ru,
        country_name_uz:req.body.country_name_uz
    }
    const review = await Review.create(data)
    res.status(200).send(review)
}

const getAllReviews = async (req, res) => {

    const reviews = await Review.findAll({})
    res.status(200).send(reviews)

}

module.exports = {
    addReview,
    getAllReviews
}