/**
 * @swagger
 * components:
 *   schemas:
 *     Points:
 *       type: object
 *       required:
 *         - title
 *         - title_ru
 *         - title_uz      
 *         - latlon
 *         - url
 *         - address
 *         - address_ru
 *         - address_uz  
 *         - history
 *         - history_ru
 *         - history_uz  
 *         - main_img_url
 *         - year   
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the point
 *         title:
 *           type: string
 *           description: The title of your point
 *         title_ru:
 *           type: string
 *           description: The title of your point
 *         title_uz:
 *           type: string
 *           description: The title of your point              
 *         latlon:
 *           type: array
 *           items:
 *              type: number
 *           items2:
 *              type: number 
 *         url:
 *           type: string
 *           description: The point url
 *         address:
 *           type: string
 *           description: The point address
 *         address_ru:
 *            type: string
 *            description: The point address
 *         address_uz:
 *            type: string
 *            description: The point address 
 *         history:
 *           type: string
 *           description: The point history
 *         history_ru:
 *           type: string
 *           description: The point history
 *         history_uz:
 *           type: string
 *           description: The point history     
 *         main_img_url:
 *           type: string
 *           description: The point main image url
 *         video_url:
 *           type: string
 *           description: The point video url
 *         year:
 *           type: string
 *           description: The point year
 *         virtual_tour:
 *           type: string
 *           description: The point virtual tour url
 *         visible:
 *           type: boolean
 *           description: The point visible              
 *     
 */

/**
 * @swagger
 * tags:
 *   name: Points
 *   description: The points managing API
 * /point:
 *   get:
 *     summary: Lists all the points
 *     tags: [Points]
 *     responses:
 *       200:
 *         description: The list of the points
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Points'
 * /point/add:
 *   post:
 *     summary: Create a new point
 *     tags: [Points]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Points'
 *     responses:
 *       200:
 *         description: The created point.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Points'
 *       500:
 *         description: Some server error
 * /point/{id}:
 *   get:
 *     summary: Get the point by id
 *     tags: [Points]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The point id
 *     responses:
 *       200:
 *         description: The point response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Points'
 *       404:
 *         description: The book was not found
 *   put:
 *    summary: Update the point by the id
 *    tags: [Points]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The point id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Points'
 *    responses:
 *      200:
 *        description: The point was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Points'
 *      404:
 *        description: The point was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the point by id
 *     tags: [Points]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The point id
 *
 *     responses:
 *       200:
 *         description: The point was deleted
 *       404:
 *         description: The point was not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     VirtualTours:
 *       type: object
 *       required:
 *         - main_image
 *         - thumbnail
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the review
 *         main_image:
 *           type: array
 *           description: The main image of your virtual tour 360 images list url
 *           items:
 *              type: string
 *              description: The virtual tour image url           
 *         thumbnail:
 *           type: string
 *           description: The thumbnail of your virtual tour thumbnail
 *        
 *     
 */

/**
 * @swagger
 * tags:
 *   name: VirtualTours
 *   description: The hotels virtual tour managing API
 * /point/allVirtualTours:
 *   get:
 *     summary: Lists all the virtual tour
 *     tags: [VirtualTours]
 *     responses:
 *       200:
 *         description: The list of the virtual tour
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/VirtualTours'
 * /point/addVirtualTour/{id}:
 *   post:
 *     summary: Create a new virtual tour
 *     tags: [VirtualTours]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VirtualTours'
 *     responses:
 *       200:
 *         description: The created virtual tour.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VirtualTours'
 *       500:
 *         description: Some server error
 * /point/getPointVirtualTour/{id}:
 *   get:
 *     summary: Get virtual tour by id
 *     tags: [VirtualTours]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The virtual tour id
 *     responses:
 *       200:
 *         description: The point virtual tour response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VirtualTours'
 *       404:
 *         description: The virtual tour was not found
 */

const { Router } = require('express')
const router = Router()

const {
    getAllPoints,
    getPointById,
    addPoint,
    updatePoint,
    removePoint,
    getPointVirtualTour
} = require('../controllers/pointControllers')
const { upload } = require('../utils/multer')
const { addVirtualTour, getVirtualTour } = require('../controllers/virtualTourControllers')

router.get('/', getAllPoints)
router.get('/allVirtualTours', getVirtualTour)

router.post('/add', upload.single('main_img_url'),  addPoint)
router.get('/:id', getPointById)
router.put('/:id', upload.single('main_img_url'), updatePoint)
router.delete('/:id', removePoint)


// Review Url and Controller

router.post('/addVirtualTour/:id', upload.array("virtual_images"), addVirtualTour)

// get hotel reviews
router.get('/getPointVirtualTour/:id', getPointVirtualTour)


module.exports = router