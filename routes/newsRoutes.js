/**
 * @swagger
 * components:
 *   schemas:
 *     News:
 *       type: object
 *       required:
 *         - title
 *         - title_ru
 *         - title_uz
 *         - sub_title
 *         - sub_title_ru
 *         - sub_title_uz
 *         - main_img
 *         - description
 *         - description_ru
 *         - description_uz
 *         - img_list 
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the travel
 *         title:
 *           type: string
 *           description: The title of your News
 *         title_ru:
 *           type: string
 *           description: The title of your News
 *         title_uz:
 *           type: string
 *           description: The title of your News
 *         sub_title:
 *           type: string
 *           description: The sub title of your News
 *         sub_title_ru:
 *           type: string
 *           description: The sub title of your News
 *         sub_title_uz:
 *           type: string
 *           description: The sub title of your News   
 *         main_img:
 *           type: string
 *           description: The main image of your News 
 *         description:
 *           type: string
 *           description: The news description
 *         description_ru:
 *           type: string
 *           description: The news description
 *         description_uz:
 *           type: string
 *           description: The news description 
 *         img_list:
 *           type: array
 *           items:
 *              type: string
 *              description: The news image list  
 */

/**
 * @swagger
 * tags:
 *   name: News
 *   description: The news managing API
 * /news:
 *   get:
 *     summary: Lists all the news
 *     tags: [News]
 *     responses:
 *       200:
 *         description: The list of the news
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/News'
 * /news/add:
 *   post:
 *     summary: Create a new news
 *     tags: [News]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/News'
 *     responses:
 *       200:
 *         description: The created news.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/News'
 *       500:
 *         description: Some server error
 * /news/{id}:
 *   get:
 *     summary: Get the news by id
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The news id
 *     responses:
 *       200:
 *         description: The news response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/News'
 *       404:
 *         description: The news was not found
 * /news/update/{id}:
 *   put:
 *    summary: Update the news by the id
 *    tags: [News]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The news id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/News'
 *    responses:
 *      200:
 *        description: The news was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/News'
 *      404:
 *        description: The news was not found
 *      500:
 *        description: Some error happened
 * /news/delete/{id}:
 *   delete:
 *     summary: Remove the news by id
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The news id
 *
 *     responses:
 *       200:
 *         description: The news was deleted
 *       404:
 *         description: The news was not found
 */


const { Router } = require("express")
const fs = require("fs")
const router = Router()

const {
    getAllNews,
    getNewsById,
    addNews,
    updateNews,
    deleteNews
} = require("../controllers/newsControllers")
const { upload } = require("../utils/multer")


router.get("/", getAllNews)
router.get("/:id", getNewsById)
router.post("/add", upload.fields([{name:"main_img"}, {name:"img_list", maxCount:10}]), addNews)
router.put("/update/:id", upload.fields([{name:"main_img"}, {name:"img_list", maxCount:10}]), updateNews)
router.delete("/delete/:id", deleteNews)

module.exports = router