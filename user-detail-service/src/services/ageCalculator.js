// THis file take care of calculating age from persons Date of birth for the birthday has ocucurred or not

function ageCalculate(dob){

    const birthdate = new Date(dob) //convert  to Date oboject
    const today = new Date() //Current date

  let   age = today.getFullYear() -birthdate.getFullYear() //DIffernce in years will give the date of birth
    const month = today.getMonth()- birthdate.getMonth()

    if(month<0 ||(month===0 && today.getDate()<birthdate.getDate()))
    {
  age-- //Need to subtraact a year if birthday not yet occured
    }

    return age;

}

module.exports = {ageCalculate}