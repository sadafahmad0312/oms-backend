const express = require('express'); //imprt express framewoirk

const router = express.Router() //Initialize router
const {body} = require('express-validator') //IMports the body function from express-validator package~ us eto define validation rules for data sent in the rquest body


const {validateRequest} = require('../middlewares/validateMiddleware')  //Imports the custom middleware



const handleUpload = require('../controllers/uploadController')
const uploadMiddleware = require('../middlewares/uploadMiddleware');
const { route } = require('../app');




router.post('/',  uploadMiddleware,
    [body('firstName').trim().notEmpty().withMessage('First Name is required'),
     body('lastName').trim().notEmpty().withMessage('Last Name is required'),
     body('dob').isISO8601().withMessage('dob must be a valid date')
    ],
    validateRequest   //This custom middleware checks if any of the validation is failed

, handleUpload) //handles /api/upload with middleware +controller

module.exports = router