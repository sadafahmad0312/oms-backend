const {extractText} = require('./fileProcessor')

const path = require('path') //Importing built in path module 

describe('extract Text From File', ()=>{
    test('extract text from simple pdf' , async()=>{
        const filePath = path.join(__dirname, '../../upload/Sample.pdf');
        console.log(filePath)
        const text = await extractText(filePath);
        expect(typeof text).toBe('string')
        expect(text.length).toBeGreaterThan(0)
    })

    test('extract text from image using OCR', async()=>{
        const imagePath = path.join(__dirname, '../../upload/sample.png');
        console.log(imagePath)
        const text =await extractText(imagePath)
        expect(typeof text).toBe('string')
        expect(text.length).toBeGreaterThan(0)

    })

    test('THrow error when file type is not accepted', async()=>{
        const filePath = path.join(__dirname, '../../upload/EC2.word');
        
       await  expect(extractText(filePath)).rejects.toThrow('Unsupported file type')
    })
})