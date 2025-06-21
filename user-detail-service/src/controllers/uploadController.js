//This COntroller Handles the full upload logic - Validation, Parsing , Calculating age  and building the resposne

const {extractText} = require('../services/fileProcessor.js') // import from service
const {ageCalculate} = require('../services/ageCalculator.js') //import from service

const handleUpload = async(req, res) =>{
   try{
   const {firstName, lastName, dob} = req.body  //destructure from request body
   const file = req.file    //extract uploaded fiel info

   if(!firstName || !lastName || !dob )
   {
    return res.status(400).json({message: 'Missing fileds'}) //to validate input
   }

   const text = await extractText(file.path)  //Extract text from uploaded file
   const age = await ageCalculate(dob)  //Calculate age from date of birth
   const fullName = `${firstName} ${lastName}`  //Combine firstNAme and lastName 

   return res.json({fullName, age , text})  //Returning final response
   }catch(error)
   {
    console.error('Upload error ', error.message);
    res.status(500).json({message: 'Server Error'})
   }
}

module.exports = handleUpload;