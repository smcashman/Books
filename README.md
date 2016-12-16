# Bookshelf

A modern one-page app to help you manage your book collection. Avoid that awkward moment where you realize you've already read that book you just bought! Add books, organize them into shelves (to be read,wishlist,favorites,etc), and get new suggestions based on your favorites.

As a book hoarder, I know how hard it is to keep track of what books you have, which ones you've read, and which ones you want to read!

## Using the application
Click on the middle box to view your titles, click the right box to add a new title to your collection, or click the left box to find suggestions for new titles
![Mainpage](public/images/mainpage.png?raw=true "Main page")
View your results including any reviews or notes about the book. Click to filter by bookshelf!
![Results](public/images/resultspage.png?raw=true "Results Page")
Add a new book to your collection, including notes, whether or not you've read it, and what category it belongs to.
![Addpage](public/images/addbook.png?raw=true "Add page")
Stuck on what to read next? Look for suggestions based on other authors or books you've enjoyed.
![Suggestions](public/images/suggestion.png?raw=true "Suggestion page")

## API Documentation
Bookshelf is a RESTful app that will return results in JSON.
Ajax GET calls to /books will return a JSON object listing all books currently in the database. 
Send an Ajax GET call to /books/:_ID to return a listing for a specific book 


## Built With

* [Node](https://nodejs.org/en/) - Backend
* [Mongodb](https://www.mongodb.com/) - Database
* [Mongoose](http://mongoosejs.com/) - Used to work with database
* [Express](http://expressjs.com/) - Used to handle server routes
* [Handlebars](http://handlebarsjs.com/) - Templating
* [Tastekid API](https://www.tastekid.com/) - Used to power the suggestions
* [Passport](http://passportjs.org/) - Login Credentials

## Authors

* **Sara Cashman** - [Sara Cashman](https://github.com/smcashman)
* **Coffee
* **Googling



