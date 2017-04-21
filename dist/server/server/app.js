"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var morgan = require("morgan");
var mongoose = require("mongoose");
var path = require("path");
var cors = require("cors");
var db_1 = require("./config/db");
var routes_1 = require("./routes");
var app = express();
exports.app = app;
app.set('port', (process.env.PORT || 3000));
app.use(cors());
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
mongoose.connect(db_1.default.url);
var db = mongoose.connection;
mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
    routes_1.default(app);
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    app.listen(app.get('port'), function () {
        console.log('Angular 2 Full Stack listening on port ' + app.get('port'));
    });
});
//# sourceMappingURL=app.js.map