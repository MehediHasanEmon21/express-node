const mongoose = require('mongoose');
const config = require('./config');

const db_url = config.db.url;


mongoose.connect(db_url)
.then(() => {
    console.log('connect successfull')
})
.catch((err) => {
    console.log(err);
    process.exit(1);
})

