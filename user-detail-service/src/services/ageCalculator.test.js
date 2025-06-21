const {ageCalculate} = require('./ageCalculator')

describe('ageCalculate', ()=>{  //using jest suite
    test('calculate correct age ', ()=>{ //Defining a test case
     const dob = '2000-01-05' //Sample dob string 
     const age = ageCalculate(dob);
     const expected = new Date(). getFullYear() -2000
     expect(age===expected ||age === expected -1).toBe(true)
    })
})