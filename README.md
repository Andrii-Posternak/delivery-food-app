# delivery-food-app

Online food delivery service

## Created with

**Frontend**: react.js, styled-components, webpack  
**Backend**: node.js, express, mongo DB

## Usage

### Frontend

To visit the live page follow the [link](delivery-food-app-go.netlify.app)

To start locally:

- clone the project locally;
- type `npm install` in console;
- type `npm start` in console;

### Backend

To use a deployed project use this link
`https://delivery-food-app-backend.onrender.com/api` as the base url

To start locally:

- follow the
  [link](https://github.com/Andrii-Posternak/delivery-food-app-backend) and
  clone the project locally;
- type `npm install` in console;
- create .env file in root directory and add to it environments"PORT", "DB_HOST"
- type `npm start` in console;

The following endpoints are available:

- **GET** `/shops` - get a list of all shops
- **GET** `/foods` - get a list of all food from all shops
- **POST** `/orders` - save order to database
