# Business Recommendation By Review API Documentation

## AUTH ENDPOINTS

### Login

> **POST** https://business-rec-web-be.herokuapp.com/api/auth/login<br/>

Must include username and password in request body. Returns a json web token<br/><br/>
Example request body:<br/>

```
{
"username": "testUser",
"password": "testPassword"
}
```

---

### Register

> **POST** https://business-rec-web-be.herokuapp.com/api/auth/register

Must include unique username, and a password in request body<br/><br/>
Example request body: <br/>

```
{
"username": "testUser",
"password": "testPassword"
}
```

---
## USER ENDPOINTS

### User by id

> **GET** https://business-rec-web-be.herokuapp.com/api/users/:id


### Get User's Company/Companies
> **GET** https://business-rec-web-be.herokuapp.com/api/users/:id/companies

### Add a Company for a User
> **POST** https://business-rec-web-be.herokuapp.com/api/users/:id/newcompany

Example request body: <br/>
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
## COMPANY ENDPOINTS
### Company by id

> **GET** https://business-rec-web-be.herokuapp.com/api/companies/:id


---
