# API Documentation

This documentation provides an overview of the endpoints available for interfacing with the "Person" resource and their standard request and response formats. It also includes sample usage, known limitations, and instructions for setting up and deploying the API.

## Base URL

The base URL for all endpoints is `http://localhost:3000` (unless changed by user).

## Endpoints

### Add a new person

**Endpoint:** `POST /api`

**Request:**

```http
POST /api
Content-Type: application/json

{
  "name": "John Doe"
}
```

**Response:**

```http
Status: 200 OK
Content-Type: application/json

{
  "name": "John Doe",
  "_id": "6503015360aa24dfa1c4670a",
  "__v": 0
}
```

### Fetching details of a person

**Endpoint:** `GET /api/{id}`

**Request:**

```http
GET /api/{id}
```

**Response:**

```http
Status: 200 OK
Content-Type: application/json

{
  "name": "John Doe",
  "_id": "6503015360aa24dfa1c4670a",
  "__v": 0
}
```

### Updating details of a person

**Endpoint:** `PUT /api/{id}`

**Request:**

```http
PUT /api/{id}
Content-Type: application/json

{
  "name": "Jane Doe"
}
```

**Response:**

```http
Status: 200 OK
Content-Type: application/json

{
  "name": "Jane Doe",
  "_id": "6503015360aa24dfa1c4670a",
  "__v": 0
}
```

### Deleting a person

**Endpoint:** `DELETE /api/{id}`

**Request:**

```http
DELETE /api/{id}
```

**Response:**

```http
Status: 200 OK
Content-Type: application/json

{
    "message": "John Doe David removed successfully"
}
```

## Sample Usage

Here are some examples of how you can use the API:

1 . Adding a new person:
   - Send a `POST` request to `/api` with the person's name in the request body.
   - The API will respond with the person's details, including the assigned ID.

2 . Fetching details of a person:
   - Send a `GET` request to `/api/{id}` with the person's ID in the URL.
   - The API will respond with the person's details.

3 . Updating details of a person:
   - Send a `PUT` request to `/api/{id}` with the person's ID in the URL and the updated name in the request body.
   - The API will respond with the updated person's details.

4 . Deleting a person:
   - Send a `DELETE` request to `/api/{id}` with the person's ID in the URL.
   - The API will respond with success message if the deletion was successfull.

## Limitations and Assumptions

Please note the following limitations and assumptions of the API:

- The API assumes that the ID provided in the URL for fetching, updating, or deleting a person exists in the database. If the ID is invalid, an error will be returned.
- The API does not support bulk operations for creating, updating, or deleting multiple persons at once.
- The API does not implement any authentication or authorization mechanisms. It assumes unrestricted access to the endpoints.

## Setup and Deployment

To set up and deploy the API locally or on a server, follow these instructions:

1 . Clone the project repository from GitHub.

2 . Install the required dependencies using `npm install`.

3 . Configure the database connection (required) and the port (optional) in the `.env` file.

5 . Start the express server.

6 . The API will be accessible at `http://localhost:3000` or the specified URL.