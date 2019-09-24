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

### User

> **GET** https://business-rec-web-be.herokuapp.com/api/users/:id

Must include unique JWT in request header <br/><br/>
Example request body: <br/>

---
## COMPANY ENDPOINTS
---
