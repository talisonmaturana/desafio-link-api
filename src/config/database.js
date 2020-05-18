const mongoose = require('mongoose');

exports.connect = () => {
  mongoose.connect(
    'mongodb+srv://talison:VcjKaxXUslnTSxS6@cluster0-ued3b.mongodb.net/test?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};
