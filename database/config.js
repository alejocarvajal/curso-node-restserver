const mongoose = require('mongoose');

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_CONN);
        console.log('base de datos online');
    }catch (e) {
        throw new Error('Error a la hora de iniciar la base de datos');
    }
}

module.exports = {
    dbConnection
}