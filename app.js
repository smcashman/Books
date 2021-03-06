var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
var router = express.Router();
var db;
var Schema = mongoose.Schema;
var BookSchema = new Schema({
    title: String,
    author: String,
    readBook: String,
    review: String,
    tags: String,

});

mongoose.connect('mongodb://Admin1:Password1@ds111178.mlab.com:11178/bookshelf');


var db = mongoose.connection;

var routes = require('./routes/index');
var users = require('./routes/users');

// Initialize App
var app = express();


app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({
    defaultLayout: 'layout'
}));
app.set('view engine', 'handlebars');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport 
app.use(passport.initialize());
app.use(passport.session());


app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.'),
            root = namespace.shift(),
            formParam = root;

        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));


app.use(flash());

app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});



app.use('/', routes);
app.use('/users', users);


app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
    console.log('Server started on port ' + app.get('port'));
});




var Novel = mongoose.model('Novel', BookSchema);

// add a book
app.post('/books', function(req, res) {

    book = new Novel({
        title: req.body.title,
        author: req.body.author,
        readBook: req.body.readName,
        review: req.body.infoForm,
        tags: req.body.tagsName
    });

    book.save(function(err) {
        if (err)
            res.send(err);
        res.redirect('/');
    });
});

// get ALL THE BOOKS
app.get('/books', function(req, res) {
    Novel.find(function(err, books) {
        if (err)
            res.send(err);
        res.json(books);
    });
});

// get ONE book

app.get('/books/:_id', function(req, res) {
    Novel.findById(req.params._id, function(err, book) {
        if (err)
            res.send(err);
        res.json(book);
    });
})

// delete a book
app.delete('/books/:_id', function(req, res) {
    Novel.findByIdAndRemove(req.params._id, function(err, book) {
        if (err) {
            return res.status(500).json({
                // message: 'Internal Server Error'
            });
        }
        res.status(201).json({
            message: 'Item was deleted'
        })
    })
})

//update a book
app.put('/books/:_id', function(req, res) {
    var queryID = {
        _id: req.params._id
    }
    var updateThis = req.body;
    
    updatedbook = new Novel({
        title: req.body.title,
        author: req.body.author,
        read: req.body.read,
        review: req.body.review,
        tags: req.body.tags
    });
    console.log(req.params)
    console.log(req.body)
    Novel.findOneAndUpdate(queryID, updateThis,
        function(err, book) {
            if (err) {
                return res.status(500).json({
                    // message: 'Internal Server Error'
                })
            }
            res.status(201).json({
                message: 'Item was updated'
            })
        })

})