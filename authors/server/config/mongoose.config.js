const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/authors', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Successfully connected to the authors database'))
    .catch((err) => console.log('Error connecting to the authors database', err));
