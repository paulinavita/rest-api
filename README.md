# rest-api


## List of user routes : ##
Route | HTTP | Headers | Body | Description
----- | ----- | ----- | ----- | -----
/api/signup | POST | none | none | Register as a new user
/api/signin | POST | none | none | Login as a registered user
/api/users | GET | Token | none | Get all the users (Admin)
/api/users/:id | GET | Token | none | Get a single users (Admin and Authorized user)
/api/users| POST | Token | `name:String` (required), `Email:String` (required), ``password:String``(required) | Create a user (Admin)
/api/users/:id | DELETE | Token | none | Delete a user (Admin)
/api/users/:id | PUT | Token | `name:String` (required), `Email:String` (required), ``password:String``(required) | Update a user info (Admin and Authorized)


## Usage

Run the server on [http://localhost:3000](http://localhost:3000) 