const mongoose = require('mongoose');

exports.connect = () => {
  mongoose.connect(
    'mongodb+srv://<your_user>:<your_password>@cluster0-ued3b.mongodb.net/test?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};
