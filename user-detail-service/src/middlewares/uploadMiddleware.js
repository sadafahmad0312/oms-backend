const multer = require('multer') //initialize multer package 

const path = require('path'); //import path module for working with file extensions

const storage = multer.diskStorage({
    destination: '/uploads', //As of now it uploads files into uploaded directory as we scale we can change itto  mongo db gridfs storage
    filename:(_, file, callback)=>{
      callback(null, Date.now()+ '-' +file.originalname)  //Rename file uniquely
    }

})

const fileFilter = (_, file, callback)=>{
    const allowed =  ['.jpg', '.jpeg' , '.png', '.pdf']  //Allowed extensions
    const ext = path.extname(file.originalname).toLowerCase();
    if(allowed.includes(ext))
    {
        callback(null, true)
    }else{
        callback(new Error('only pdf and image files are allowed'))
    }
}

const upload = multer({storage, fileFilter})

module.exports = upload.single('file') //export the middleware that handles the single file
