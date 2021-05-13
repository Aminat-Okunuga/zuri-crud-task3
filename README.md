# Zuri Task
# A SIMPLE EXPRESS APPLICATION
## How to test
- Clone or Pull this repository
- Run `npm install` to install all dependancies
## Running Application
- Open `POSTMAN`
- Making a `GET` request, enter url `localhost:2468` or `https://ex-crud.herokuapp.com/`
- Making  a `POST` request, enter url `localhost:2468` or `https://ex-crud.herokuapp.com/` with json body data 
`{
name: "your_name",
email: "your_email",
country: "your_country"
}`

- Making  a `PATCH` request, enter url `localhost:2468/:id` or `https://ex-crud.herokuapp.com/`  where `:id` is `user id` with object data to modify, i.e name, email or country of specific user
- Making  a `DELETE` request, enter url `localhost:2468/:id` or `https://ex-crud.herokuapp.com/`  where `:id` is `user id`  of the specific user to be deleted


