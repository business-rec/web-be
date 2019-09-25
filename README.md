# Business Recommendation By Review API Documentation

# Introduction
Stores user information and authentication

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
  * [get company by id](#2-get-company-by-id)

* [user](#user)

  * [get a users companies](#1-get-a-users-companies)
  * [patch a users company](#2-patch-a-users-company)
  * [get a user](#3-get-a-user)
  * [get a user graph](#4-get-a-user-graph)
  * [delete a user](#5-delete-a-user)
  * [patch a user](#6-patch-a-user)
  * [delete a user's company](#7-delete-a-user's-company)
  * [add existing company to user](#8-add-existing-company-to-user)

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


Status: login | Code: 201



```js
{
    "message": "Welcome bryant!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMSwidXNlcm5hbWUiOiJicnlhbnQiLCJpYXQiOjE1NjkzNzI0NTIsImV4cCI6MTU2OTQwMTI1Mn0.6aZ6tkYn2OXpAqcET_3yPBkZQUKELiLyHYyAKk6W9Bs"
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
	"username": "bryant267",
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



### 2. get company by id



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
    "id": "9"
  }
```



### 8. add existing company to user



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: https://business-rec-web-be.herokuapp.com/api/users/10/companies
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | {{jwt_token}} |  |



***Body:***

```js        
  {
    "id": "2"
  }
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
