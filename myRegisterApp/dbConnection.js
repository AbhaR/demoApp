var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://admin:admin123@ds163300.mlab.com:63300/microservicesdb"); 
//DB connection:END
//DB Schema:START
var register_schema = new mongoose.Schema({
  firstName: String,
  lastName: String
});
var User = mongoose.model("User", register_schema);