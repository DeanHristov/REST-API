const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const projectConf = require('./build/project.config');

app.use(logger('dev'));

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Use CORS
app.use(require('./src/middlewares/cors'));


// Lunch the server
app.listen(projectConf.serverPort, projectConf.serverHost, () => {
    console.log(`The server is started at: http://${projectConf.serverHost}:${projectConf.serverPort}`)
});


app.use('/', require('./src/routes/index'));
app.use('/users', require('./src/routes/users'));
app.use('/comments', require('./src/routes/comments'));
app.use('/todos', require('./src/routes/todos'));
app.use('/posts', require('./src/routes/posts'));
app.use('/albums', require('./src/routes/albums'));

