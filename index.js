const app = require('./app');
const {startConnection} = require('./database');
const port = 3000;

startConnection;
app.listen(port);

console.log('Server iniciado, port: '+port+'. Visita http://localhost:'+port+'/api/records');