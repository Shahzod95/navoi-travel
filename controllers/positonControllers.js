const { Position } = require("../models/position.Model");


const getAllPositions = async (req, res) => {
    try {
        const positions = await Position.findAll()
        res.status(200).json({
            message:"Success",
            positions:positions.reverse()
        })
        
    } catch (error) {
        res.send(error)
    }

}

const addPositon = async(req, res) => {
    const {ip_address, loc, country} = req.body
    try {
        
        const ps = await Position.findOne({
            where:{
                ip_address
            }
        })
        console.log("POSITION :",ps)
        if(!ps){
            const position =  await Position.create({
                ip_address,
                loc,
                country
            })
            res.status(200).json({
                message:"Success",
                position
            })
        } else {
            res.json({
                message:"All ready ip address"
            })
        }
    } catch (error) {
       res.send(error) 
    }
}

module.exports = {
    getAllPositions,
    addPositon
}