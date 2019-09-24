# Business Recommendation By Review API Documentation

## Introduction
Stores user information and authentication

## Overview
Users create their own business, or mutliple businesses. TBD, their business will be modeled on similar business reviews

## Authentication
JWT

## Error Codes
401 Unauthorized 404 Not Found 422 Unprocessable Entity

## auth
user login and register

---

## USER AUTH 
---

## POST login

```
https://business-rec-web-be.herokuapp.com/api/auth/login
```

### Bodyraw (application/json). Returns a json web token
```
{
	"username": "bryant",
	"password": "password"
}


```
---

### POST Register

```
https://business-rec-web-be.herokuapp.com/api/auth/register
```

Must include unique username, and a password in request body<br/><br/>
Example request body: <br/>

### Bodyraw (application/json).

```
{
"username": "testUser",
"password": "testPassword"
}
```

---
## USER ENDPOINTS
---


## GET get a user

```
https://business-rec-web-be.herokuapp.com/api/users/:id
```
Path Variables

```
id
```
---


## GET get a user graph

```
http://localhost:3300/api/users/graph/:id/?eager=companies
```
Path Variables

```
id
```

### Bodyraw (application/json).

```
{
  "id": 10,
  "username": "Rudolph17",
  "password": "$2b$10$mMer7ZOCJv9YG4lBMzvtteAoLbY2oIYWw5/vupITc05ndoeL.7Hgu",
  "companies": [
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
}
```

---

## DELETE delete a user

```
https://business-rec-web-be.herokuapp.com/api/users/:id
```
Path Variables

```
id
```

---
## PATCH patch a user
```
https://business-rec-web-be.herokuapp.com/api/users/:id
```
Path Variables

```
id
```
### Bodyraw (application/json).
```
{
  "username": "pizzahut',
  "password": "meatlovers"
}
```

```
{
  "password": "meatlovers"
}
```
---

## GET get a users companies

```
https://business-rec-web-be.herokuapp.com/api/users/:id/companies
```
### Bodyraw (application/json).

```
[
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

---
## POST a new Company for a User
```
https://business-rec-web-be.herokuapp.com/api/users/:id/newcompany
```

### Bodyraw (application/json).

```
  {
    "name": "Strosin - Wehner",
    "type": "American (Traditional)",
    "streetName": "Emilia Passage",
    "streetAddress": "52617 Hailee Rapid",
    "city": "Kiehnview",
    "state": "Mississippi",
    "zipCode": "05445"
  },
```
---
## PATCH patch a users company

```
https://business-rec-web-be.herokuapp.com/api/users/:id/companies
```
### Bodyraw (application/json).
```
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
---
## DELETE delete a user's company
```
https://business-rec-web-be.herokuapp.com/api/users/:id/companies
```
### Path Variables
```
id
```

### Bodyraw (application/json).
```
  {
    "id": "9"
  }
  ```
---

