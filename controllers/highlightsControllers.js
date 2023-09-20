const { HighLight } = require("../models");

const addHighlight = async (req, res) => {
    const highlight_id = req.params.id
    console.log("Natija : ", req.body)
    let data = {
        en: req.body.en,
        ru: req.body.ru,
        uz: req.body.uz,
        travel_id: highlight_id,
    }
    const highlight = await HighLight.create(data)
    res.status(200).send(highlight)
}

const getAllHighlights = async (req, res) => {
    const highlight = await HighLight.findAll({})
    res.status(200).send(highlight)

}




module.exports = {
    addHighlight,
    getAllHighlights,
}