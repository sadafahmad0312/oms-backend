//Thi takes care of parsing the file based one xtension that is image or PDFs use tessaract for image extractiona and pdf parser for extractring text from pdfs.

const fs = require('fs').promises //Use Promise based file operations 

const path = require ('path');

const pdfParse = require ('pdf-parse'); //   PDF parser

const tesseract = require('tesseract.js') //For image extraaction (tesseract is an OCR(Optical character recognition) tool)
const ALLLOWED_TYPES = ['.png', '.jpg', '.jpeg']
async function extractText(filePath){
    
try {
      const ext = path.extname(filePath).toLowerCase();  //Get File extension
      if(ext == '.pdf')
      {
        const buffer = await fs.readFile(filePath)  //Read PDFs
        const data =  await pdfParse(buffer)  //parse pdf text
        const enrichData = data.text.replace(/\n/g, '').trim()
        return enrichData;
      }
    
      if(ALLLOWED_TYPES.includes(ext))
      {
        const result = await tesseract.recognize(filePath, 'eng') //Extract text from the image
        return result.data.text;
      }
    
      throw new Error ('Unsupported file type')
    }
 catch (error) {
    console.error(`Failed to extract text from file ${filePath}`, error.message);
    throw error

    
}
}

module.exports = {extractText}