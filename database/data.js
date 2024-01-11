const mongoose = require('mongoose');
 
 
const uri = "mongodb+srv://neko2out:Nest%402023@cluster0.qyeil6s.mongodb.net/"
 
const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch(e) {
        console.log(e);
    }
}
  
module.exports = connect;   