/**
 * @swagger
 * components:
 *   schemas:
 *     Travels:
 *       type: object
 *       required:
 *         - title
 *         - title_ru
 *         - title_uz
 *         - header_img
 *         - price
 *         - location
 *         - location_ru
 *         - location_uz 
 *         - durations
 *         - durations_ru
 *         - durations_uz
 *         - type
 *         - type_ru
 *         - type_uz
 *         - description
 *         - description_ru
 *         - description_uz
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the travel
 *         title:
 *           type: string
 *           description: The title of your travel
 *         title_ru:
 *           type: string
 *           description: The title of your travel
 *         title_uz:
 *           type: string
 *           description: The title of your travel  
 *         header_img:
 *           type: string
 *           description: The header image of your travel 
 *         price:
 *           type: string
 *           description: The travel price
 *         location:
 *           type: string
 *           description: The travel location
 *         location_ru:
 *           type: string
 *           description: The travel location
 *         location_uz:
 *           type: string
 *           description: The travel location
 *         durations:
 *           type: string
 *           description: The travel duration
 *         durations_ru:
 *           type: string
 *           description: The travel duration
 *         durations_uz: 
 *           type: string
 *           description: The travel duration   
 *         types:
 *           type: string
 *           description: The travel type
 *         types_ru: 
 *           type: string
 *           description: The travel type
 *         types_uz:
 *           type: string
 *           description: The travel type
 *         description:
 *           type: string
 *           description: The travel description
 *         description_ru:
 *           type: string
 *           description: The travel description
 *         description_uz:
 *           type: string
 *           description: The travel description   
 */

/**
 * @swagger
 * tags:
 *   name: Travels
 *   description: The travels managing API
 * /travel:
 *   get:
 *     summary: Lists all the travels
 *     tags: [Travels]
 *     responses:
 *       200:
 *         description: The list of the travels
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Travels'
 * /travel/add:
 *   post:
 *     summary: Create a new travel
 *     tags: [Travels]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Travels'
 *     responses:
 *       200:
 *         description: The created travel.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Travels'
 *       500:
 *         description: Some server error
 * /travel/{id}:
 *   get:
 *     summary: Get the travel by id
 *     tags: [Travels]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The travel id
 *     responses:
 *       200:
 *         description: The travel response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Travels'
 *       404:
 *         description: The travel was not found
 *   put:
 *    summary: Update the travel by the id
 *    tags: [Travels]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The travel id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Travels'
 *    responses:
 *      200:
 *        description: The travel was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Travels'
 *      404:
 *        description: The travel was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the travel by id
 *     tags: [Travels]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The travel id
 *
 *     responses:
 *       200:
 *         description: The travel was deleted
 *       404:
 *         description: The travel was not found
 */


// Highlights 


/**
 * @swagger
 * components:
 *   schemas:
 *     Highlights:
 *       type: object
 *       required:
 *         - en
 *         - ru
 *         - uz
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the travel
 *         en:
 *           type: string
 *           description: The travel highlights en
 *         ru:
 *           type: string
 *           description: The travel highlights ru
 *         uz:
 *           type: string
 *           description: The travel highlights uz  
 */


/**
 * @swagger
 * tags:
 *   name: Highlights
 *   description: The travel highlights managing API
 * /getAllHighlights:
 *   get:
 *     summary: Lists all the highlights
 *     tags: [Highlights]
 *     responses:
 *       200:
 *         description: The list of the highlight
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Highlights'
 * /addHighlight/{id}:
 *   post:
 *     summary: Create a new highlight
 *     tags: [Highlights]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Highlights'
 *     responses:
 *       200:
 *         description: The created highlight
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Highlights'
 *       500:
 *         description: Some server error
 * /allTravelHighlights/{id}:
 *   get:
 *     summary: Get the highlight by travel id
 *     tags: [Highlights]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The travel id
 *     responses:
 *       200:
 *         description: The travel response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Highlights'
 *       404:
 *         description: The travel was not found
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     ToureRoutes:
 *       type: object
 *       required:
 *         - title
 *         - title_ru
 *         - title_uz
 *         - img_list
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the travel
 *         title:
 *           type: string
 *           description: The title of your toure route
 *         title_ru:
 *           type: string
 *           description: The title of your toure route
 *         title_uz:
 *           type: string
 *           description: The title of your toure route  
 *         img_list:
 *                  type: array
 *                  description: The tour route image list
 *                  items:
 *                    type: string
 *                    description: The tour route image url    
 */

/**
 * @swagger
 * tags:
 *   name: ToureRoutes
 *   description: The travel toure route managing API
 * /allTravelToureRoutes:
 *   get:
 *     summary: Lists all the travels
 *     tags: [ToureRoutes]
 *     responses:
 *       200:
 *         description: The list of the toure route
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ToureRoutes'
 * /addTourRoute/{id}:
 *   post:
 *     summary: Create a new toure route
 *     tags: [ToureRoutes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ToureRoutes'
 *     responses:
 *       200:
 *         description: The created toure route.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ToureRoutes'
 *       500:
 *         description: Some server error
 * /getAllTourRoutes/{id}:
 *   get:
 *     summary: Get the toure route by travel id
 *     tags: [ToureRoutes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The travel id
 *     responses:
 *       200:
 *         description: The travel response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ToureRoutes'
 *       404:
 *         description: The travel was not found
 */


// Route Pass Time


/**
 * @swagger
 * components:
 *   schemas:
 *     TourRoutePassTime:
 *       type: object
 *       required:
 *         - time
 *         - time_header_title
 *         - time_header_title_ru
 *         - time_header_title_uz
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the travel
 *         time:
 *           type: string
 *           description: The time of your toure route
 *         time_header_title:
 *           type: string
 *           description: The time header title of your toure route
 *         time_header_title_ru:
 *           type: string
 *           description: The time header title ru of your toure route  
 *         time_header_title_uz:
 *           type: string
 *           description: The time header title uz of your toure route   
 */

/**
 * @swagger
 * tags:
 *   name: TourRoutePassTime
 *   description: The travel toure route pass time managing API
 * /allTourRoutePassTimes:
 *   get:
 *     summary: Lists all the toure route pass time
 *     tags: [TourRoutePassTime]
 *     responses:
 *       200:
 *         description: The list of the toure route pass time
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TourRoutePassTime'
 * /addTourRoutePassTime/{id}:
 *   post:
 *     summary: Create a new toure route pass time
 *     tags: [TourRoutePassTime]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TourRoutePassTime'
 *     responses:
 *       200:
 *         description: The created toure route pass time.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TourRoutePassTime'
 *       500:
 *         description: Some server error
 * /getTourePassTimes/{id}:
 *   get:
 *     summary: Get thetoure route pass timetoure route pass time by toure route id
 *     tags: [TourRoutePassTime]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The toure route id
 *     responses:
 *       200:
 *         description: The toure route response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TourRoutePassTime'
 *       404:
 *         description: The travel was not found
 */

// Time Title Body 


/**
 * @swagger
 * components:
 *   schemas:
 *     TimeTitleBody:
 *       type: object
 *       required:
 *         - subject
 *         - subject_ru
 *         - subject_uz
 *         - subject_description
 *         - subject_description_ru
 *         - subject_description_uz
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the travel
 *         subject:
 *           type: string
 *           description: The time of your toure route
 *         subject_ru:
 *           type: string
 *           description: The time header title of your toure route
 *         subject_uz:
 *           type: string
 *           description: The time header title ru of your toure route  
 *         subject_description:
 *           type: string
 *           description: The time header title uz of your toure route 
 *         subject_description_ru:
 *           type: string
 *           description: The time header title uz of your toure route
 */

/**
 * @swagger
 * tags:
 *   name: TimeTitleBody
 *   description: The travel time title body managing API
 * /getAllTimeTitleBodies:
 *   get:
 *     summary: Lists all the time title body
 *     tags: [TimeTitleBody]
 *     responses:
 *       200:
 *         description: The list of the time title body
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TimeTitleBody'
 * /addTimeTitleBody/{id}:
 *   post:
 *     summary: Create a new time title body
 *     tags: [TimeTitleBody]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TimeTitleBody'
 *     responses:
 *       200:
 *         description: The created time title body.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TimeTitleBody'
 *       500:
 *         description: Some server error
 * /getTimeTitleBodyById/{id}:
 *   get:
 *     summary: Get the time title body by toure route pass time id
 *     tags: [TimeTitleBody]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The toure route pass time id
 *     responses:
 *       200:
 *         description: The toure route pass time response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TimeTitleBody'
 *       404:
 *         description: The travel was not found
 */

const { Router } = require('express')
const router = Router()
const { 
  getAllTravels, 
  getTravelById, 
  addTravelBook,
  updateTravelBook,
  removeTravelBook,
  getTravelTourRoutes,
  getTravelHighlights
} = require('../controllers/travelControllers')

const { upload } = require('../utils/multer')
const { addTourRoute, getAllTourRoutes, getTourePassTimes } = require('../controllers/tourRouteControllers')
const { getAllTourRoutePassTimes, addTourRoutePassTime, getTimeTitleBodyById } = require('../controllers/toureRoutePassTime')
const { getAllTimeTitleBodies, addTimeTitleBody } = require('../controllers/timeTitleBodyControllers')
const { addHighlight, getAllHighlights } = require('../controllers/highlightsControllers')

router.get('/', getAllTravels)
router.get('/getAllHighlights', getAllHighlights)

router.post('/add', upload.single('header_img'), addTravelBook)
router.get('/:id', getTravelById)
router.put('/:id', upload.single('header_img'), updateTravelBook)
router.delete('/:id', removeTravelBook)


// Toure route Url and Controller
router.post('/addHighlight/:id',  addHighlight)

// get Travel toure routes
router.get('/allTravelHighlights/:id', getTravelHighlights )

// Toure route Url and Controller
router.get('/allTravelToureRoutes', getTravelTourRoutes)
router.post('/addTourRoute/:id', upload.array('img_list'), addTourRoute)

// get Travel toure routes
router.get('/getAllTourRoutes/:id', getAllTourRoutes)


// Toure route pass time Url and Controller
router.get('/allTourRoutePassTimes', getAllTourRoutePassTimes)
router.post('/addTourRoutePassTime/:id', addTourRoutePassTime)

// get hotel reviews
router.get('/getTourePassTimes/:id', getTourePassTimes)


// Time title body Url and Controller
router.get('/getAllTimeTitleBodies', getAllTimeTitleBodies)
router.post('/addTimeTitleBody/:id', addTimeTitleBody)

// get time title body
router.get('/getTimeTitleBodyById/:id', getTimeTitleBodyById)


module.exports = router