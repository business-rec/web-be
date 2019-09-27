# Business Recommendation By Review API Documentation

# Introduction
Stores user information, authentication and company info for Business Rec app

# Overview
Users create their own business, or mutliple businesses. TBD, their business will be modeled on similar business reviews

# Authentication
json web tokens

# Error Codes
401 Unauthorized <br/>
404 Not Found<br/>
422 Unprocessable Entity<br/>

## Indices

* [auth](#auth)

  * [login](#1-login)
  * [register](#2-register)

* [companies](#companies)

  * [get all companies](#1-get-all-companies)
  * [get all companies types](#2-get-all-companies-types)
  * [get all companies types array](#3-get-all-companies-types-array)
  * [get company by id](#4-get-company-by-id)

* [user](#user)

  * [get a users companies](#1-get-a-users-companies)
  * [patch a users company](#2-patch-a-users-company)
  * [get a user](#3-get-a-user)
  * [get a user graph](#4-get-a-user-graph)
  * [delete a user](#5-delete-a-user)
  * [patch a user](#6-patch-a-user)
  * [delete a user's company](#7-delete-a-user's-company)
  * [add existing company to user](#8-add-existing-company-to-user)
  * [add new company to a user](#9-add-new-company-to-a-user)

* [yelp](#yelp)

  * [get categories](#1-get-categories)
  * [get businesses by category](#2-get-businesses-by-category)

* [Default](#default)

  * [get root](#1-get-root)


--------


## auth
user login and register



### 1. login


login with username/password


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://business-rec-web-be.herokuapp.com/api/auth/login
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"username": "bryant",
	"password": "password"
}
```



***Responses:***


Status: login response | Code: 201



```js
{
    "message": "Welcome bryant!",
    "user": {
        "username": "bryant",
        "id": 11
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMSwidXNlcm5hbWUiOiJicnlhbnQiLCJpYXQiOjE1Njk0MzI2MjYsImV4cCI6MTU2OTUxOTAyNn0.ntR0HK-b8vRAByuEmzIfndaaebNRKVg4g_jzrLgVbpE"
}
```



Status: login | Code: 201



```js
{
    "message": "Welcome bryant!",
    "user": {
        "username": "bryant",
        "id": 11
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMSwidXNlcm5hbWUiOiJicnlhbnQiLCJpYXQiOjE1Njk0MzI2MjYsImV4cCI6MTU2OTUxOTAyNn0.ntR0HK-b8vRAByuEmzIfndaaebNRKVg4g_jzrLgVbpE"
}
```



### 2. register


login with username/password


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://business-rec-web-be.herokuapp.com/api/auth/register
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
	"username": "33bryanwew267",
	"password": "password"
}
```



## companies



### 1. get all companies



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://business-rec-web-be.herokuapp.com/api/companies/all
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | {{jwt_token}} |  |



***Responses:***


Status: get all companies | Code: 200



```js
[
    {
        "id": 11,
        "name": "Mann Inc",
        "type": "Shopping",
        "streetName": "Baby Lakes",
        "streetAddress": "52088 Modesto Ferry",
        "city": "Lexibury",
        "state": "Nebraska",
        "zipCode": "87466-6426"
    },
    {
        "id": 12,
        "name": "Nicolas - Gorczany",
        "type": "Restaurants",
        "streetName": "Koss Knolls",
        "streetAddress": "285 Little Inlet",
        "city": "Bridgetteside",
        "state": "Indiana",
        "zipCode": "05795-4502"
    },
    {
        "id": 13,
        "name": "Kirlin Group",
        "type": "Health & Medical",
        "streetName": "Katelin Forges",
        "streetAddress": "289 Jadyn Burgs",
        "city": "West Myra",
        "state": "Arkansas",
        "zipCode": "19067"
    },
    {
        "id": 14,
        "name": "Miller LLC",
        "type": "Beauty & Spas",
        "streetName": "Lew Drives",
        "streetAddress": "40367 Dandre Vista",
        "city": "Lake Rupert",
        "state": "Minnesota",
        "zipCode": "77773"
    },
    {
        "id": 15,
        "name": "Eichmann LLC",
        "type": "Local Services",
        "streetName": "Henderson Groves",
        "streetAddress": "34632 Micaela Path",
        "city": "Faheyhaven",
        "state": "North Carolina",
        "zipCode": "82344-4120"
    },
    {
        "id": 16,
        "name": "Connelly - Labadie",
        "type": "Food",
        "streetName": "Sabryna Garden",
        "streetAddress": "940 Susan Bridge",
        "city": "Dickensland",
        "state": "Washington",
        "zipCode": "05536"
    },
    {
        "id": 17,
        "name": "McDermott and Sons",
        "type": "Automotive",
        "streetName": "Pat Motorway",
        "streetAddress": "3495 Kunze Drives",
        "city": "West Angeloshire",
        "state": "Texas",
        "zipCode": "03224"
    },
    {
        "id": 18,
        "name": "Pagac - Stokes",
        "type": "Doctors",
        "streetName": "Gerald Canyon",
        "streetAddress": "773 Rex Harbor",
        "city": "Binsfurt",
        "state": "Florida",
        "zipCode": "74977"
    },
    {
        "id": 19,
        "name": "Fahey LLC",
        "type": "Active Life",
        "streetName": "Milo Fords",
        "streetAddress": "128 Claire Drive",
        "city": "Port Ned",
        "state": "Wyoming",
        "zipCode": "77812"
    },
    {
        "id": 20,
        "name": "Sauer - Schimmel",
        "type": "Professional Services",
        "streetName": "Hayes Skyway",
        "streetAddress": "19829 Harvey Locks",
        "city": "South Otto",
        "state": "Kansas",
        "zipCode": "31755-9373"
    }
]
```



### 2. get all companies types



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://business-rec-web-be.herokuapp.com/api/companies/companytypes
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | {{jwt_token}} |  |



***Responses:***


Status: get all companies types | Code: 200



```js
[
    {
        "id": 1,
        "type": "Home Services"
    },
    {
        "id": 2,
        "type": "Shopping"
    },
    {
        "id": 3,
        "type": "Restaurants"
    },
    {
        "id": 4,
        "type": "Health & Medical"
    },
    {
        "id": 5,
        "type": "Beauty & Spas"
    },
    {
        "id": 6,
        "type": "Local Services"
    },
    {
        "id": 7,
        "type": "Food"
    },
    {
        "id": 8,
        "type": "Automotive"
    },
    {
        "id": 9,
        "type": "Doctors"
    },
    {
        "id": 10,
        "type": "Active Life"
    },
    {
        "id": 11,
        "type": "Professional Services"
    },
    {
        "id": 12,
        "type": "Event Planning & Services"
    },
    {
        "id": 13,
        "type": "Real Estate"
    },
    {
        "id": 14,
        "type": "Home & Garden"
    },
    {
        "id": 15,
        "type": "Auto Repair"
    },
    {
        "id": 16,
        "type": "Hair Salons"
    },
    {
        "id": 17,
        "type": "Fast Food"
    },
    {
        "id": 18,
        "type": "Fashion"
    },
    {
        "id": 19,
        "type": "Nightlife"
    },
    {
        "id": 20,
        "type": "Contractors"
    }
]
```



### 3. get all companies types array



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://business-rec-web-be.herokuapp.com/api/companies/typesarray
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | {{jwt_token}} |  |



***Responses:***


Status: get all companies types array | Code: 200



```js
[
    "Active Life",
    "Automotive",
    "Auto Repair",
    "Beauty & Spas",
    "Contractors",
    "Doctors",
    "Event Planning & Services",
    "Fashion",
    "Fast Food",
    "Food",
    "Hair Salons",
    "Health & Medical",
    "Home & Garden",
    "Home Services",
    "Local Services",
    "Nightlife",
    "Professional Services",
    "Real Estate",
    "Restaurants",
    "Shopping"
]
```



### 4. get company by id



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://business-rec-web-be.herokuapp.com/api/companies/:id
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | {{jwt_token}} |  |



***Responses:***


Status: get company by id | Code: 200



```js
{
    "id": 11,
    "name": "Mann Inc",
    "type": "Shopping",
    "streetName": "Baby Lakes",
    "streetAddress": "52088 Modesto Ferry",
    "city": "Lexibury",
    "state": "Nebraska",
    "zipCode": "87466-6426"
}
```



## user



### 1. get a users companies



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://business-rec-web-be.herokuapp.com/api/users/:id/companies
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | {{jwt_token}} | jwt token |



***Responses:***


Status: get a users companies | Code: 200



```js
[
    {
        "id": 11,
        "name": "updated name",
        "type": "test",
        "streetName": "abc",
        "streetAddress": "1234",
        "city": "NYC",
        "state": "NY",
        "zipCode": "05445"
    },
    {
        "id": 1,
        "name": "Mosciski, Schuppe and Casper",
        "type": "Delis",
        "streetName": "Abraham Ridges",
        "streetAddress": "99906 Runolfsdottir Causeway",
        "city": "West Deangelofort",
        "state": "Minnesota",
        "zipCode": "67642"
    },
    {
        "id": 2,
        "name": "Yundt, McLaughlin and Yundt",
        "type": "Sandwiches",
        "streetName": "Maureen Fork",
        "streetAddress": "7466 Roosevelt Ranch",
        "city": "Hardymouth",
        "state": "New York",
        "zipCode": "21912"
    }
]
```



### 2. patch a users company



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: https://business-rec-web-be.herokuapp.com/api/users/:id/companies
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | {{jwt_token}} |  |



***Body:***

```js        
  {
    "id": 11,
    "name": "updated name",
    "type": "test",
    "streetName": "abc",
    "streetAddress": "1234",
    "city": "NYC",
    "state": "NY",
    "zipCode": "05445"
  }
```



### 3. get a user



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://business-rec-web-be.herokuapp.com/api/users/:id/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | {{jwt_token}} |  |



### 4. get a user graph



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://business-rec-web-be.herokuapp.com/api/users/graph/:id/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | {{jwt_token}} |  |



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| eager | companies |  |



***Responses:***


Status: get a user graph | Code: 200



```js
{
    "id": 25,
    "username": "lc",
    "password": "$2b$10$ynoXftYMpWYpPi0Gd4fCte7jYfaEnRU5ylg/VR1h2n2Kcd3Hz6KZG",
    "companies": [
        {
            "id": 44,
            "name": "my company",
            "type": "Delis",
            "streetName": "123 street",
            "streetAddress": "1234 st",
            "city": "NYC",
            "state": "NY",
            "zipCode": "05445"
        }
    ]
}
```



### 5. delete a user



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: https://business-rec-web-be.herokuapp.com/api/users/:id/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Authorization | {{jwt_token}} |  |



### 6. patch a user



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: https://business-rec-web-be.herokuapp.com/api/users/:id/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | {{jwt_token}} |  |



***Body:***

```js        
{
  "password": "meatlovers"
}
```



### 7. delete a user's company



***Endpoint:***

```bash
Method: DELETE
Type: RAW
URL: https://business-rec-web-be.herokuapp.com/api/users/:id/companies
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | {{jwt_token}} |  |



***Body:***

```js        
  {
    "id": "11"
  }
```



### 8. add existing company to user



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://business-rec-web-be.herokuapp.com/api/users/:id/companies
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | {{jwt_token}} |  |



***Body:***

```js        
  {
    "id": "12"
  }
```



***Responses:***


Status: add existing company to user | Code: 200



```js
{
    "id": "12"
}
```



Status: add existing company to user | Code: 200



```js
{
    "id": "2"
}
```



### 9. add new company to a user



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://business-rec-web-be.herokuapp.com/api/users/:id/newcompany
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | {{jwt_token}} |  |



***Body:***

```js        
{
    "name": "my company",
    "type": "Delis",
    "streetName": "123 street",
    "streetAddress": "1234 st",
    "city": "NYC",
    "state": "NY",
    "zipCode": "05445"
}
```



***Responses:***


Status: add new company to user | Code: 200



```js
{
    "name": "my company",
    "type": "Delis",
    "streetName": "123 street",
    "streetAddress": "1234 st",
    "city": "NYC",
    "state": "NY",
    "zipCode": "05445",
    "id": 12
}
```

### 10. get company good and bad terms



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://business-rec-web-be.herokuapp.com/api/companies/:id/terms
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | {{jwt_token}} |  |



***Body:***

```js        
{
    "name": "my company",
    "type": "Delis",
    "streetName": "123 street",
    "streetAddress": "1234 st",
    "city": "NYC",
    "state": "NY",
    "zipCode": "05445"
}
```



***Responses:***


Status: add new company to user | Code: 200



```js
{
  "id": 17,
  "typeid": 17,
  "type": "Contractors",
  "alias": "Contractors",
  "terms": [
    {
      "id": 20,
      "companytypetypeid": 17,
      "term": "salesman",
      "ratingscore": 0.8881,
      "termtype": "worst"
    },
    {
      "id": 19,
      "companytypetypeid": 17,
      "term": "solar",
      "ratingscore": 0.8944,
      "termtype": "worst"
    },
    {
      "id": 18,
      "companytypetypeid": 17,
      "term": "phone",
      "ratingscore": 0.897,
      "termtype": "worst"
    },
...
```



## yelp



### 1. get categories



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://business-rec-web-be.herokuapp.com/api/yelp/categories
```



### 2. get businesses by category



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://business-rec-web-be.herokuapp.com/api/yelp/businesses/search/:alias
```



## Default



### 1. get root



***Endpoint:***

```bash
Method: GET
Type: 
URL: https://business-rec-web-be.herokuapp.com
```

---
[Back to top](#Overview)

api docs credit: https://github.com/thedevsaddam) 
