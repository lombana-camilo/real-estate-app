# Fullstack Project - Real Estate App

## Main Objective
Create a fullstack web application with authentication that enables the user to list properties for rent or sale, filter the results and create their own ads of a new property

## Development Tools

* React
* Redux
* Node Js
* Express
* Sequelize, Postgress

### `API`

The data of the properties was retrieved from [Rapid API - Bayut](https://rapidapi.com/apidojo/api/bayut)

<!-- ## Project Images -->
<!-- Freely usable images were downloaded from [https://unsplash.com/](https://unsplash.com/) -->
## Features
* The user can create and delete new ads of properties using its account
* The user can filter properties by: purpose, rentFrequency, category, price, area, rooms, baths
* The user can see the details of any ad by clicking on it
* The user can use pagination to navigate through the results

## Frontend - Views
### `Main Page`
- Search bar with authentication options
- Filtering options
- Area to display the listed properties

### `Details Page`
- Shows all information about a specific ad

### `Signup /Login Pages`
- Dynamic controlled form to create or login a user

### `Create Ad Page`
- Dynamic controlled form to create or delete a property ad

## Backend - Routes
#### GET /properties (gets both api and db properties)
#### GET /properties?search{params}
#### GET /properties/{idProp}
#### POST /properties
#### DELETE /properties/:id

### authentication
#### POST /users/signup
#### POST /users/login
<!-- - [x] Basic UI prototype -->
<!-- - [x] Separate into react components -->
<!-- - [x] Connect API's data to components using hooks -->
<!-- - [ ] Create interactivity -->


## Current Progress
### `Backend`
- [x] Set DB Models
- [x] Set DB Relations
- [x] Server Routing - Ads
- [x] Server Routing - Authentication
### `Frontend`
- [ ] Landing
- [x] Home
- [x] Filters
- [ ] Authentication
- [ ] Pagination
- [x] Creation Form
### `Test`
- [ ] Database
- [ ] Models, rendering
- [ ] Front, components
