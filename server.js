const PORT = 3001;
const express = require('express');
const html_routes = require('./Routes/html-routes');
const api_routes = require('./Routes/api-routes');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(html_routes);
app.use(api_routes);
