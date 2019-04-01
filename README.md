# rest-api


## List of user routes : ##
Route | HTTP | Headers | Body | Description
----- | ----- | ----- | ----- | -----
/api/signup | POST | none | none | Register as a new user
/api/signin | POST | none | none | Login as a registered user
/api/users | GET | none | none | Get all the users (Admin)
/api/users/:id | GET | none | none | Get a single users (Admin and Authorized user)
/api/users| POST | none | `name:String` (required), `Email:String` (required), ``password:String``(required) | Create a user (Admin)
/api/users/:id | DELETE | none | none | Delete a user (Admin)
/api/users/:id | PUT | none | `name:String` (required), `Email:String` (required), ``password:String``(required) | Update a user info (Admin and Authorized)


## Usage

Run the server on [http://localhost:3000](http://localhost:3000) 