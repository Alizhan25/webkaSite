const express = require("express");
const app = express();
var ejs = require('ejs');
var path = require('path');
const port = 3000;



app.use(express.static(__dirname + '/static'));

app.set('views', './views')
app.set('view engine', 'ejs')

app.use("/", require("./views/routes/index"));
app.use("/index", require("./views/routes/index"));
app.use("/home", require("./views/routes/home"));
app.use("/packages", require("./views/routes/packages"));
app.use("/sweetlist", require("./views/routes/sweetlist"));
app.use("/gallery", require("./views/routes/gallery"));
app.use("/bookus", require("./views/routes/bookus"));
app.use("/bookingsuccess", require("./views/routes/bookingsuccess"));

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);8