const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/travel_dev', 
        { 
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        });
        console.log("Connect success!!!")
    } catch (error) {
        console.log("Connect fail!!!")
    }
}

module.exports = {connect};