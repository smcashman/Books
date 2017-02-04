# Bookshelf

A modern one-page app to help you manage your book collection. Avoid that awkward moment where you realize you've already read that book you just bought! Add books, organize them into shelves (to be read, wishlist, favorites, etc), and get new suggestions based on your favorites.

As a book hoarder, I know how hard it is to keep track of what books you have, which ones you've read, and which ones you want to read!

## Working Prototype

A working prototype is available at: (https://whispering-beyond-60086.herokuapp.com/users/login)
Demo login credentials are: Username: DEMOS -- Password: password

## Using the application
Click on the middle box to view your titles, click the right box to add a new title to your collection, or click the left box to find suggestions for new titles.
![Mainpage](public/images/mainpage.png?raw=true "Main page")
View your results including any reviews or notes about the book. Click to filter by bookshelf! You can also edit the book information (including changing its shelf) or delete a title.
![Results](public/images/resultspage.png?raw=true "Results Page")
Add a new book to your collection, including notes, whether or not you've read it, and what category it belongs to.
![Addpage](public/images/addbook.png?raw=true "Add page")
Stuck on what to read next? Search for your favorite author to find suggestions for your next favorite book. See the title, author, and a blurb about the book.
![Suggestions](public/images/suggestion.png?raw=true "Suggestion page")

## Technical

The backend of the app is built with Node.js with Express for the server and Mongodb (with Mongoose) for the database.
The API has an endpoint that returns all titles in the database.
Authentication is powered by Passport.
The front end uses Handlebars for templating.
Book recommendations are powered by the TasteKid API. Tastekid finds similar titles based on crowdsourced data.


## Authors

* **Sara Cashman** - [Sara Cashman](https://github.com/smcashman)




