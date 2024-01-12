# Shopping List App developed using AngularJs and NodeJs
This angularjs application will make post request and store data into the MY-SQL database. And also list out those data in listing page with filter feature.
The AngularJs as a frontend development and NodeJS used as a backend development.
## Run project
git clone https://github.com/hitubaldaniya/angularJs.git<br />
cd angularJs<br />
npm start<br />
## Run Server
cd angularJs<br />
node server.js<br />
## Create a table at MySQL
- CREATE TABLE `mypolice`.`post` ( `category` VARCHAR(100) NOT NULL , `title` VARCHAR(100) NOT NULL, `content` VARCHAR(500) NOT NULL , `oncreated` DATE NOT NULL ) ENGINE = InnoDB;
- The database connection information is statically defined into the file just for demo project purposes. In real-world project we can not set it up like this.
## Requirements
NodeJS<br />
NPM<br />
Angular Cli<br />
## Home Page
![Home Page](https://user-images.githubusercontent.com/17410951/139973339-b363f5f7-7c0c-42b4-a5eb-2c6a277cf454.JPG)
## Add List
![Add Post](https://user-images.githubusercontent.com/17410951/139973536-95dd3b1b-4bfe-41cb-951d-eaadcddd70e6.JPG)
## Shop List with all categories
![Shop List All Category](https://user-images.githubusercontent.com/17410951/139973759-7b78dd73-54a4-4e43-82b2-ad54619ecf83.JPG)
## Shop List with filtered category
![Shop List Electric Category](https://user-images.githubusercontent.com/17410951/139974004-a09abba9-7b4f-4166-8290-b14bd0b26388.JPG)
