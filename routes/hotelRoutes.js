/**
 * @swagger
 * components:
 *   schemas:
 *     Hotels:
 *       type: object
 *       required:
 *         - title
 *         - title_ru
 *         - title_uz 
 *         - room
 *         - room_ru
 *         - room_uz 
 *         - types
 *         - types_ru
 *         - types_uz  
 *         - img_url
 *         - reviews
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the hotel
 *         title:
 *           type: string
 *           description: The title of your hotel
 *         title_ru:
 *           type: string
 *           description: The title of your hotel
 *         title_uz:
 *           type: string
 *           description: The title of your hotel   
 *         room:
 *           type: string
 *           description: Room for hotel
 *         room_ru:
 *           type: string
 *           description: Room for hotel
 *         room_uz:
 *           type: string
 *           description: Room for hotel  
 *         types:
 *           type: string
 *           description: types for hotel
 *         types_ru:
 *           types: string
 *           description: types ru for hotel      
 *         types_uz:
 *           types: string
 *           description: types uz for hotel
 *         img_url:
 *           types: string
 *           description: image for hotel 
 *     
 */

/**
 * @swagger
 * tags:
 *   name: Hotels
 *   description: The hotels managing API
 * /hotel:
 *   get:
 *     summary: Lists all the hotels
 *     tags: [Hotels]
 *     responses:
 *       200:
 *         description: The list of the hotels
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Hotels'
 * /hotel/add:
 *   post:
 *     summary: Create a new hotel
 *     tags: [Hotels]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Hotels'
 *     responses:
 *       200:
 *         description: The created hotel.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hotels'
 *       500:
 *         description: Some server error
 * /hotel/{id}:
 *   get:
 *     summary: Get the hotel by id
 *     tags: [Hotels]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The hotel id
 *     responses:
 *       200:
 *         description: The hotel response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hotels'
 *       404:
 *         description: The book was not found
 *   put:
 *    summary: Update the hotle by the id
 *    tags: [Hotels]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The hotel id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Hotels'
 *    responses:
 *      200:
 *        description: The hotel was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Hotels'
 *      404:
 *        description: The hotel was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the hotel by id
 *     tags: [Hotels]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The hotel id
 *
 *     responses:
 *       200:
 *         description: The hotel was deleted
 *       404:
 *         description: The hotel was not found
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Reviews:
 *       type: object
 *       required:
 *         - description
 *         - description_ru
 *         - description_uz
 *         - person_img
 *         - person_name
 *         - country_flag_code
 *         - country_name
 *         - country_name_ru
 *         - country_name_uz   
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the review
 *         description:
 *           type: string
 *           description: The description of your review
 *         description_ru:
 *           type: string
 *           description: The description of your review ru
 *         description_uz:
 *           type: string
 *           description: The description of your review uz
 *         person_img:
 *           type: string
 *           description: The person image of your review person
 *         person_name:
 *           type: string
 *           description: The person name
 *         country_flag_code:
 *           type: string
 *           description: The country flag code
 *         country_name:
 *           type: string
 *           description: The country name
 *         country_name_ru:
 *           type: string
 *           description: The country name ru
 *         country_name_uz:
 *           type: string
 *           description: The country name uz   
 *        
 *     
 */

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: The hotels review managing API
 * /hotel/allReviews:
 *   get:
 *     summary: Lists all the reviews
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: The list of the reviews
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reviews'
 * /hotel/addReview/{id}:
 *   post:
 *     summary: Create a new review
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reviews'
 *     responses:
 *       200:
 *         description: The created review.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reviews'
 *       500:
 *         description: Some server error
 * /hotel/getHotelReviews/{id}:
 *   get:
 *     summary: Get hotel reviews by id
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The hotel id
 *     responses:
 *       200:
 *         description: The hotel reviews response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reviews'
 *       404:
 *         description: The book was not found
 */

const { Router } = require('express')
const router = Router()

const {
  getHotel,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel,
  getHotelReviews
} = require('../controllers/hotelControllers')
const { upload } = require('../utils/multer')
const { getAllReviews, addReview } = require('../controllers/reviewControllers')

router.get('/', getHotel)
router.get('/allReviews', getAllReviews)
router.post('/add', upload.single('img_url'), createHotel)
router.get('/:id', getHotelById)
router.put('/:id', upload.single('img_url'), updateHotel)
router.delete('/:id', deleteHotel)


// Review Url and Controller

router.post('/addReview/:id', upload.single('person_img'), addReview)

// get hotel reviews
router.get('/getHotelReviews/:id', getHotelReviews)

module.exports = router