const express = require('express');
const app = express();
const serverConfig = require('./config/index');

const startAndConfigureServer = () => {
    const {PORT} = serverConfig;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}

startAndConfigureServer();