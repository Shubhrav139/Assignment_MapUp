const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const intersectionRoutes = require('./routers/intersectionRoutes');

const PORT = 9000;
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
// Limit added to pass large amount of data in request
app.use(bodyParser.json({ limit: '50mb' }));

app.use(
  cors({
    origin: '*',
    methods: "GET,POST,DELETE,PATCH"
  })
);

app.use('/api', intersectionRoutes);

app.listen(PORT, () => {
  console.log("Connected to localhost:" + PORT);
});

