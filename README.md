# Washington Attractions API

## Description
The Washington Attractions API is a comprehensive tool that provides access to a diverse array of attractions in Washington state. Divided into two core services, this API provides details, multimedia content, and tailored queries to enrich the user experience in discovering and understanding Washington attractions.

## Setup
1. Install MySQL on your system if not already installed.
2. Enter `mysql -u username -p dbname < attractionsdb.sql` in the console.
   - Replace `username` with your MySQL username and `dbname` with a name of your choice.
3. Make adjustments to the 'config.js' file for port, user, password, and database.
4. Enter `npm i express nodemon mysql cors` in the console in the 'backend' directory.

## Usage
1. Enter `npm start` in the console of the 'backend' directory to start the program.
2. The API can be used through API testing tools such as Postman or Thunder Client.
3. The API endpoints and its functionalities can be found through the Washington Attraction API documentation: https://cchelsd.github.io/WA-attractions-api/
