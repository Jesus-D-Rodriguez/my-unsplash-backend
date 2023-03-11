const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/myunsplash', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(db=> console.log("Db is connected"))
.catch(err => console.log("Hubo error" + err));