const {Router} = require("express")
const route = Router()

const {getAllPositions, addPositon} = require("../controllers/positonControllers")

route.get("/", getAllPositions)
route.post("/add", addPositon)

module.exports = route