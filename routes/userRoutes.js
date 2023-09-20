/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: The username of your user
 *         password:
 *           type: string
 *           description: password for the user    
 *     
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /login:
 *   post:
 *     summary: login the user 
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: success login
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Users'
 * /refresh:
 *   post:
 *     summary: token refresh
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: token refresh.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 * /logout:
 *   post:
 *     summary: logout user
 *     tags: [Users]
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Users' 
 *     responses:
 *       200:
 *         description: deleted user
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 */

const { Router } = require('express')
const router = Router()
const { verify } = require("../middleware/verifymiddleware")
const { 
    login,
    logOut,
    refreshToken,
} = require('../controllers/userControllers')


router.post('/login', login)
router.post('/refresh', refreshToken)
router.post('/logout', verify, logOut)



module.exports = router