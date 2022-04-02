const mongoose = require('mongoose');

const connectDB = async () => {
   try {
       const url = process.env.MONGO_URI
       const connection = await mongoose.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
       })
       console.log (`mongodb connected`)

   } catch (error) {
       console.log(`error: ${error.message}`)

   }
};

module.exports = connectDB;