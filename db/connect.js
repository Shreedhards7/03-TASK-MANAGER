const mongoose = require('mongoose')
//const connectionString =" mongodb+srv://shree:shreeds7@nodeexpressproject.ewhdul6.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority"
const connectDB = (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB

