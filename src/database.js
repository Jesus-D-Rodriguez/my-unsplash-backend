const mongoose = require("mongoose");

const url = "mongodb+srv://my-unsplash-user:my-unsplash@my-unsplash.2gkamyo.mongodb.net/my-unsplash?retryWrites=true&w=majority";

const url2 = 'mongodb://127.0.0.1:27017/myunsplash';

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(db=> console.log("Db is connected"))
.catch(err => console.log("Hubo error" + err));