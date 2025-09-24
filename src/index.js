const express = require('express');
const app = express();

const serverConfig = require('./config/index');
const {PORT} = serverConfig;

const apiRoutes = require('./routes/index');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({extended : true}));

const startAndConfigureServer = () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}

startAndConfigureServer();
app.use('/api',apiRoutes);