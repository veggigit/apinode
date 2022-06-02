const { connect } = require('mongoose');
const dbname = 'test';
const startConnection = async () => {
    try {
        const db = await connect('mongodb://localhost/'+dbname);
        console.log('Nombre db: '+db.connection.name);
    } catch (error) {
        console.log(error);
    }
}

module.exports = startConnection();