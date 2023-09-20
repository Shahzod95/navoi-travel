/**
 * @swagger
 * components:
 *   schemas:
 *     Events:
 *       type: object
 *       required:
 *         - title
 *         - header_img
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the event
 *         title:
 *           type: string
 *           description: The title of your event
 *         header_img:
 *           type: string
 *           description: header image for the event    
 *         description:
 *           type: string
 *           description: The event explanation
 *     
 */

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: The events managing API
 * /event:
 *   get:
 *     summary: Lists all the events
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: The list of the events
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Events'
 * /event/add:
 *   post:
 *     summary: Create a new event
 *     tags: [Events]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Events'
 *     responses:
 *       200:
 *         description: The created event.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Events'
 *       500:
 *         description: Some server error
 * /event/{id}:
 *   get:
 *     summary: Get the event by id
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The event id
 *     responses:
 *       200:
 *         description: The event response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Events'
 *       404:
 *         description: The book was not found
 *   put:
 *    summary: Update the event by the id
 *    tags: [Events]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The event id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Events'
 *    responses:
 *      200:
 *        description: The event was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Events'
 *      404:
 *        description: The event was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the event by id
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The event id
 *
 *     responses:
 *       200:
 *         description: The event was deleted
 *       404:
 *         description: The event was not found
 */
const { Router } = require('express')
const { upload } = require('../utils/multer')
const router = Router()
const { 
    getEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent 
} = require('../controllers/eventControllers')


router.get('/', getEvents)
// router.post('/add', upload.single('header_img'), createEvent)

router.post('/add', upload.single('header_img'), createEvent)
router.get('/:id', getEventById)
router.put('/:id', upload.single('header_img'),  updateEvent)
router.delete('/:id', deleteEvent)


module.exports = router