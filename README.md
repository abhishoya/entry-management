# Entry Management
Entry Management System - Innovaccer SummerGeeks 2020 SDE-Intern Assignment.

This repository has branches for front-end and back-end separately.

# Tech Stack
- Front-End : ReactJS
- Back-End : NodeJS, ExpressJS 2Factor(Message Service), Nodemailer(Mail service)
- Database: MySQL 

Database can be set up locally with the help of phpmyadmin.

# Run this project locally

#### Front - End
```sh
$ git clone https://github.com/shoydex23/entry-management.git -front-end
$ cd front-end
$ cd src && touch config.js && cd ../
$ npm install
```
```sh
const config = {
  host: 'NODE_SERVER_URL_PATH' // default http://localhost:5000
};
module.exports = config;
```
#### Back - End
```sh
$ git clone https://github.com/shoydex23/entry-management.git -back-end
$ cd back-end
$ npm install
$ touch config.js
$ node index.js
```

```sh
const config = {
    host: 'HOST',
    user: 'DATABASE_USER',
    password: 'DATABASE_PASSWORD',
    database: 'DATABASE_NAME',
    email: 'GMAIL_ID',
    pass: 'GMAIL_PASSWORD'
};
module.exports = config;
```

# Working

- Visitor visits the home page.
- He might choose to check in or check out depending upon the scenario.
- Upon check in user is required to fill a form with necessary details. Form validation using validator. This will trigger an SMS and an Email to the host.
- Check out time is default set to NULL.
- Upon return the visitor can check themselves out providing the email id they registered with.
- Check out time is updated and email is triggered to the visitor's email id.
