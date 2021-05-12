# zuritask3
# A SIMPLE EXPRESS APPLICATION
## How to test
- Clone or Pull this repository
- Run `npm install` to install all dependancies
## Running Application
- Open `POSTMAN`
- Making a `GET` request, enter url `localhost:3456` or `https://citizenshipapp.herokuapp.com/`
- Making  a `POST` request, enter url `localhost:3456` or `https://citizenshipapp.herokuapp.com/` with json body data 
`{
name: "your_name",
email: "your_email",
country: "your_country"
}`

- Making  a `PATCH` request, enter url `localhost:3456/:id` or `https://citizenshipapp.herokuapp.com/:id`  where `:id` is `user id` with object data to modify, i.e name, email or country of specific user
- Making  a `DELETE` request, enter url `localhost:3456/:id` or `https://citizenshipapp.herokuapp.com/:id`  where `:id` is `user id`  of specific user to be deleted


