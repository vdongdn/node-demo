const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/travel_dev');
        console.log("Connect success!!!")
    } catch (error) {
        console.log("Connect fail!!!")
    }
}

module.exports = {connect};