const mongoose = require('mongoose');
//mongoose likes to know ahead of time, so some flexibility is lost
const { Schema } = mongoose;

//the user schema
const userSchema = new Schema({
  googleId: String
})

//loading our userSchema in as the users collection
mongoose.model('users', userSchema);
