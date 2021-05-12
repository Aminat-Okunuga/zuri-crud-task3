const mongoose = require('mongoose') //require mongoose
require('dotenv').config()
const { DB_STRING } = process.env;



const connectDB = async () => {
    try {
        await mongoose.connect(DB_STRING, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        
        });
        console.log("connected");
    } catch (err) {
        console.error(err.message);
         process.exit(1)
    }
}

module.exports = connectDB;





//create connection function
// const connectDB = () =>{
//     mongoose.connect(DB_STRING, {
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false
        
//     })
//         .then(() => {
//             console.log("connected")
//             //seed daTA
//         })
//         .catch((err) => {
//             console.error(err.message);

//             process.exit(1)
//     })
// }
