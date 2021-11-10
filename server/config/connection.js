const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://conso_97:Malaika911@cluster0.fv1gm.mongodb.net/book?retryWrites=true&w=majority" || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
