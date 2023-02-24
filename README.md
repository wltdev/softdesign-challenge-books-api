## Description

This repository is a books manager tech challenge.

## Installation

```bash
$ yarn install
```

## Running the app

````bash
# development
$ yarn start

## Test

```bash
# unit tests
$ yarn test

## End points

#### `Signup`
````

POST /signup
{
"username": "",
"password": ""
}

response
{
user,
token: jwt
}

```

#### `Signin`
```

POST /signin
{
"username": "",
"password": ""
}

response
{
user,
token: jwt
}

#### `Books list`

```
GET /books
header : {
  Authorization: Bearer ${token}
}

response
[
  {
    "title": "book title",
    "description": "book description",
    "price": "100",
    "renter": ObjectId()
  }
]

```

#### `Create new Book`

```
POST /books
header : {
  Authorization: Bearer ${token}
}

data: {
  "title": "book title",
  "description": "book description",
  "price": "100",
}

response
{
   _id: "",
  ...book
}

```

#### `Update Book`

```
PUT /books/:id
header : {
  Authorization: Bearer ${token}
}

data: {
  "title": "book title edited",
  "description": "book description edited",
  "price": "50",
}

response
{
   _id: "",
  ...book
}
```

#### `Delete Book`

```
DELETE /books/:id
header : {
  Authorization: Bearer ${token}
}

response
{
}

```

#### `Rent a Book`

```
PUT /books/rent/:id
header : {
  Authorization: Bearer ${token}
}

response
{
  "title": "book title",
  "description": "book description",
  "price": "100",
  "renter": ObjectId()
}

```

#### `UnRent a Book`

```
PUT /books/unrent/:id
header : {
  Authorization: Bearer ${token}
}

response
{
  "title": "book title",
  "description": "book description",
  "price": "100"
}

```
