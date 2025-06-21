# User Detail Service

A backend service built with Express.js that accepts file uploads(image/pdf), firstName, lastName, dob  and returns
sample response
{
    "fullName": "Louis Keyer",
    "age": 25,
    "text": "Sample Text "
}

Text Extraction is done using pdf-parse for pdfs and tesseract.js for image
#Project Structure
```
user-detail-service/
├── src/
│   ├── controllers/            # Handles HTTP request/response
│   ├── services/               # Business logic + co-located tests
│   │   ├── ageService.js
│   │   ├── fileParserService.js
│   │   ├── ageService.test.js      # Unit test for age logic
│   │   └── fileParserService.test.js  # Unit test for parsing logic
│   ├── routes/                 # API endpoint definitions
│   ├── middlewares/           # Input validation, error handling
│   ├── utils/                 # Reusable helpers (optional)
│   └── app.js                 # Express app setup
├── uploads/                   # Temporary file storage (gitignored)
├── .env                       # Environment variables
├── .gitignore                 # Ignored files/folders
├── Dockerfile                 # Docker setup
├── docker-compose.yml         # Container orchestration
├── package.json               # Project config and dependencies
└── README.md                  # Project documentation

## Requirements
- Node js>= 20
- npm
- docker desktop for windows

##Running the project with docker
--docker-compose build   (For building)
docker-compose up (For running the container)

##service will be available at 
'http://localhost:4000'

#Tools And Stack
1. Express.js
2. pdf-parse
3. tesserect.js
4. multer
5. express-validator
6. Jest
7. supertest
8. Docker

#Testing Guide

RUN npx jest (To run all test at once)

RUN - npx jest filepath (Example: npx jest src/services/ageCalculator.js) ~~~(To run all individual test)

##Storage 
Currently this project is using simple file storage system to upload file , to scale this can be integrated with mongo and gridfs system can be used as a storage.

##Author
SADAF AHMAD
Contact ~~~~ ahmadsadaf0312@gmail.com


