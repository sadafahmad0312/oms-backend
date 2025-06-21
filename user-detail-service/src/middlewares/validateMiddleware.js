//This middleware checks if any of the validation  rules(defined in uploadRoutes using body(...) passed or failed and sends a response if therr are validation errors) failed 

const {validationResult} = require('express-validator') //This imports vlaidationResult func from express validator package~ which returns the result of validation rules applied with body(...)

function validateRequest(req, res, next)
{
    const errors = validationResult(req) //checks the req object for any validation errror collected by express-validator

    if(!errors.isEmpty())
    {
        return  res.status(422).json({errors: errors.array()}) //It sends a422 request response with json object that included the array of errors 
    }

    
next()  //calls next to move on to the next middleware
}




module.exports = {validateRequest}
