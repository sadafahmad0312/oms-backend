const request = require('supertest') //imports supertest library to allow to send http request to express app

const app = require('../../src/app') //Imports the express app

const path = require('path')  //Node js build in path module

describe('POST /api/upload', ()=>{
    test('returns fullname , age , text', async()=>{
       const response = await request(app).post('/api/upload').field('firstName', 'Louis').field('lastName', 'Frank').field('dob', '2000-01-01').attach('file', path.join(__dirname, '../../upload/Sample.pdf'))
       expect(response.statusCode).toBe(200)
       expect(response.body).toMatchObject({
        fullName: 'Louis Frank',
        age: expect.any(Number),
        text: expect.any(String)
       })


    })
})

