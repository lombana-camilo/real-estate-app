# Fullstack Project - Real Estate App
[Website Deploy](http://real-estate-app-kappa-three.vercel.app/) , 
[Video Demo](https://youtu.be/N66J2yqLtxA)

## Main Objective
Create a fullstack web application with authentication that enables the user to list properties for rent or sale, filter the results and create their own ads of a new property

## Development Tools

* Javascript
* React
* Redux ToolKit Store
* Tailwind
* Node Js
* Express
* Sequelize, Postgress
* Axios,bcrypt

### `API`

The data of the properties was retrieved from [Rapid API - Bayut](https://rapidapi.com/apidojo/api/bayut)

## Features
* The user can create and delete new ads of properties using its account
* The user can filter properties by: purpose, rentFrequency, category, price, area, rooms, baths
* The user can see the details of any ad by clicking on it
* The user can use pagination to navigate through the results

## Frontend - Views
### `Landing Page`
- Page presentation

### `Main Page`
- Search bar with authentication options
- Filtering options
- All properties displayed
- Pagination

### `Details Page`
- Shows all information about a specific ad

### `Signup and Login Pages`
- Dynamic controlled form to create or login a user

### `Create Ad Page`
- Dynamic controlled form to create or delete a property ad

## Backend - Routes
__GET /properties__: Gets both, api and DB properties  
__GET /properties/{idProp}__: Gets details of specific property  
__GET /properties/db/:userID__: Gets ads of specific user  
__POST /properties/db/:userID__: Post ad for a specific user  
__DELETE /properties/db/:adID:__ Deletes specific property from DB

## Completed Progress
### `Backend`
- [x] Set DB Models
- [x] Set DB Relations
- [x] Server Routing - Ads
- [x] Server Routing - Authentication/Authorization
### `Frontend`
- [x] Setup Redux Store and Query
- [x] Setup Tailwind
- [x] Landing
- [x] Home
- [x] Filters
- [x] Authentication
- [x] Pagination
- [x] Creation Form
- [x] Responsive
