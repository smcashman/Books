$(document).ready(function() {
    var searchTerm = ''


    $.getJSON('/books', function(data) {


        $.each(data, function(index, value) {

             if (value.tags == "wishlist"){
                $('.wishlistDisplay').append('<div class="eachAppend" class="' + value.tags + '"><p class=' + value._id + '>Title: <span class="bookTitle">' + value.title + ' <br></span>Author:<span class="bookAuthor"> ' + value.author + ' </span><br>Have you read it? <span class="read">' + value.readBook + ' </span><br> notes: <span class="bookReview">' + value.review + ' </span><br>Tags: <span class="bookTags">' + value.tags + ' </span><br><button  id=' + value._id + ' class="deleteButton">Delete</button><button class="editButton">Edit</button><button class="updateButton">Update</button><button class="exeuntButton">Cancel</button></p></div>')
             } else if (value.tags == "TBR"){
                $('.tobereadDisplay').append('<div class="eachAppend" class="' + value.tags + '"><p class=' + value._id + '>Title: <span class="bookTitle">' + value.title + ' </span><br>Author:<span class="bookAuthor"> ' + value.author + ' </span><br>Have you read it? <span class="read">' + value.readBook + ' </span><br> notes: <span class="bookReview">' + value.review + ' </span><br>Tags: <span class="bookTags">' + value.tags + ' </span><br><button  id=' + value._id + ' class="deleteButton">Delete</button><button class="editButton">Edit</button><button class="updateButton">Update</button><button class="exeuntButton">Cancel</button></p></div>')
             } else if (value.tags == "favorites"){
                $('.favoritesDisplay').append('<div class="eachAppend" class="' + value.tags + '"><p class=' + value._id + '>Title: <span class="bookTitle">' + value.title + ' </span><br>Author:<span class="bookAuthor"> ' + value.author + ' </span><br>Have you read it? <span class="read">' + value.readBook + ' </span><br> notes: <span class="bookReview">' + value.review + ' </span><br>Tags: <span class="bookTags">' + value.tags + ' </span><br><button  id=' + value._id + ' class="deleteButton">Delete</button><button class="editButton">Edit</button><button class="updateButton">Update</button><button class="exeuntButton">Cancel</button></p></div>')
             } else if (value.tags == "readandreturn"){
                $('.readandreturnDisplay').append('<div class="eachAppend" class="' + value.tags + '"><p class=' + value._id + '>Title: <span class="bookTitle">' + value.title + ' </span><br>Author:<span class="bookAuthor"> ' + value.author + ' </span><br>Have you read it? <span class="read">' + value.readBook + ' </span><br> notes: <span class="bookReview">' + value.review + ' </span><br>Tags: <span class="bookTags">' + value.tags + ' </span><br><button  id=' + value._id + ' class="deleteButton">Delete</button><button class="editButton">Edit</button><button class="updateButton">Update</button><button class="exeuntButton">Cancel</button></p></div>')
             } else if (value.tags == "reference"){
                $('.referenceDisplay').append('<div class="eachAppend" class="' + value.tags + '"><p class=' + value._id + '>Title: <span class="bookTitle">' + value.title + ' </span><br>Author:<span class="bookAuthor"> ' + value.author + ' </span><br>Have you read it? <span class="read">' + value.readBook + ' </span><br> notes: <span class="bookReview">' + value.review + ' </span><br>Tags: <span class="bookTags">' + value.tags + ' </span><br><button  id=' + value._id + ' class="deleteButton">Delete</button><button class="editButton">Edit</button><button class="updateButton">Update</button><button class="exeuntButton">Cancel</button></p></div>')
             }
            else{
                $('.displayExistingTitles').append('<div> Sorry, no books to display! </div>')
            }

        });

        $('#showBooks').click(function() {
            $('#showAllBooks').show();
             $('.displayExistingTitles div').hide();
             var filterSelected = $('#filterBook').val()
            if (filterSelected == 'reference'){
                $('.readandreturnDisplay').hide();
                $('.favoritesDisplay').hide();
                $('.tobereadDisplay').hide();
                $('.wishlistDisplay').hide();
            } else if (filterSelected == 'readandreturn'){
                $('.favoritesDisplay').hide();
                $('.tobereadDisplay').hide();
                $('.wishlistDisplay').hide();
                $('.referenceDisplay').hide();
            } else if (filterSelected == 'favorites'){
                $('.tobereadDisplay').hide();
                $('.wishlistDisplay').hide();
                $('.referenceDisplay').hide();
                $('.readandreturnDisplay').hide();
            } else if (filterSelected == 'TBR'){
                $('.wishlistDisplay').hide();
                $('.referenceDisplay').hide();
                $('.readandreturnDisplay').hide();
                $('.favoritesDisplay').hide();
            } else if (filterSelected == 'wishlist'){
                $('.readandreturnDisplay').hide();
                $('.favoritesDisplay').hide();
                $('.tobereadDisplay').hide();
                $('.referenceDisplay').hide();
            }


        });

        $('#showAllBooks').click(function(){
            $('.readandreturnDisplay').show();
            $('.favoritesDisplay').show();
            $('.tobereadDisplay').show();
            $('.referenceDisplay').show();
            $('.wishlistDisplay').show();
            $(this).hide();
        });

        $('.deleteButton').click(function() {
            var buttonId = $(this).attr('id');
            console.log(buttonId)
            $.ajax({
                url: '/books/' + buttonId,
                type: 'Delete',
                success: function() {
                    $('button#' + buttonId).closest('div').remove();
                    console.log('item deleted');

                }
            })

        });

        //switches book listing back to a form to change the information

        $('.editButton').click(function() {

            $(this).hide();
            $(this).parent('p').children('.updateButton').show();
            $(this).parent('p').children('.exeuntButton').show();

            var title = $(this).parent('p').children('span.bookTitle').text();
            console.log(title)
            $(this).parent('p').children('span.bookTitle').html("<input id='editTitle' name='editTitle' type='text' value='" + title + "'>");

            var author = $(this).parent('p').children("span.bookAuthor").text();
            console.log(author)
            $(this).parent('p').children('span.bookAuthor').html("<input id='editAuthor' name='editAuthor' type='text' value='" + author + "'>");

            var readItText = $(this).parent('p').children('span.read').text();
            if (readItText == 'yes') {
                $(this).parent('p').children('span.read').html(' <select name="readName" class="readDropDown"><option value="yes" name="yes" class="readYes" selected>Yes</option><option value="no" name="no" class="readNo">No</option></select>')
            } else {
                $(this).parent('p').children('span.read').html(' <select name="readName" class="readDropDown"><option value="no" name="no" class="readNo" selected>No</option><option value="yes" name="yes" class="readYes">Yes</option></select>')
            }

            var review = $(this).parent('p').children('span.bookReview').text();
            $(this).parent('p').children('span.bookReview').html("<input id='editReview' name='editReview' type='text' value='" + review + "'>");

            var tagOption = $(this).parent('p').children('span.bookTags').text();
            console.log(tagOption)
            if (tagOption == 'TBR') {
                $(this).parent('p').children('span.bookTags').html(' <select name="tagsName" class="tagsDropDown"><option value="TBR" name="TBR" class="tagsTBR" selected>To be read</option><option value="wishlist" name="wishlist" class="wishList">Wishlist</option><option value="favorites" name="favorites" class="favoritedBook">Favorites</option><option value="reference" name="reference" class="bookReference">Reference</option><option value="readreturn" name="readreturn" class="ReadandReturn">Read & Returned</option></select>')
            } else if (tagOption == 'wishlist') {
                $(this).parent('p').children('span.bookTags').html(' <select name="tagsName" class="tagsDropDown"><option value="wishlist" name="wishlist" class="wishList" selected>Wishlist</option><option value="TBR" name="TBR" class="tagsTBR">To be read</option><option value="favorites" name="favorites" class="favoritedBook">Favorites</option><option value="reference" name="reference" class="bookReference">Reference</option><option value="readreturn" name="readreturn" class="ReadandReturn">Read & Returned</option></select>')
            } else if (tagOption == 'favorites') {
                $(this).parent('p').children('span.bookTags').html(' <select name="tagsName" class="tagsDropDown"><option value="favorites" name="favorites" class="favoritedBook" selected>Favorites</option><option value="wishlist" name="wishlist" class="wishList">Wishlist</option><option value="TBR" name="TBR" class="tagsTBR">To be read</option><option value="reference" name="reference" class="bookReference">Reference</option><option value="readreturn" name="readreturn" class="ReadandReturn">Read & Returned</option></select>')
            } else if (tagOption == 'reference') {
                $(this).parent('p').children('span.bookTags').html(' <select name="tagsName" class="tagsDropDown"><option value="reference" name="reference" class="bookReference" selected>Reference</option><option value="favorites" name="favorites" class="favoritedBook">Favorites</option><option value="wishlist" name="wishlist" class="wishList">Wishlist</option><option value="TBR" name="TBR" class="tagsTBR">To be read</option><option value="readreturn" name="readreturn" class="ReadandReturn">Read & Returned</option></select>')
            } else {
                $(this).parent('p').children('span.bookTags').html(' <select name="tagsName" class="tagsDropDown"><option value="readreturn" name="readreturn" class="ReadandReturn" selected>Read & Returned</option><option value="reference" name="reference" class="bookReference" >Reference</option><option value="favorites" name="favorites" class="favoritedBook">Favorites</option><option value="wishlist" name="wishlist" class="wishList">Wishlist</option><option value="TBR" name="TBR" class="tagsTBR">To be read</option><option value="readreturn" name="readreturn" class="ReadandReturn">Read & Returned</option></select>')
            }

            $('.exeuntButton').click(function(){

                $(this).parent('p').html('Title: <span class="bookTitle">' + title + ' </span><br>Author:<span class="bookAuthor"> ' + author + ' </span><br>Have you read it? <span class="read">' + readItText + ' </span><br> notes: <span class="bookReview">' + review + ' </span><br>Tags: <span class="bookTags">' + tagOption + ' </span><br><button class="deleteButton">Delete</button><button class="editButton">Edit</button><button class="updateButton">Update</button>');

            });

             //collect the inputs to construct the new JSON object

            $('.updateButton').click(function() {


                var buttonClassUpdate = $(this).parent('p').attr('class')
                var editedTitle = $('p.' + buttonClassUpdate).children('span').children('input#editTitle').val();
                var editedAuthor = $('p.' + buttonClassUpdate).children('span').children('input#editAuthor').val();
                var editedRead = $('p.' + buttonClassUpdate).children('span.read').children('.readDropDown').val();
                var editedReview = $('p.' + buttonClassUpdate).children('span').children('input#editReview').val();
                var editedTags = $('p.' + buttonClassUpdate).children('span').children('input#editTags').val();

                console.log(editedTags)
                $(this).parent('p').html('Title: <span class="bookTitle">' + editedTitle + ' </span><br>Author:<span class="bookAuthor"> ' + editedAuthor + ' </span><br>Have you read it? <span class="read">' + editedRead + ' </span><br> notes: <span class="bookReview">' + editedReview + ' </span><br>Tags: <span class="bookTags">' + editedTags + ' </span><br><button  id=' + buttonClassUpdate + ' class="deleteButton">Delete</button><button class="editButton">Edit</button><button class="updateButton">Update</button>');


        


                // construct and send JSON as PUT

                var updateObject = new Object();
                updateObject._id = buttonClassUpdate;
                updateObject.title = editedTitle;
                updateObject.author = editedAuthor;
                updateObject.readBook = editedRead;
                updateObject.review = editedReview;
                updateObject.tags = editedTags;
                console.log(updateObject);

                $.ajax({
                    url: '/books/' + buttonClassUpdate,
                    type: 'PUT',
                    data: updateObject,
                    success: function() {
                        
                 

                    }


                });


            });

        });

    });

    
    $('textarea#reviewBox').click(function() {
        $(this).text('');
    })
    $('.addNewTitle h2').click(function() {
        $('.showAddForm').toggle();
        if ($(this).text() == 'Add a new title here') {
            $(this).text('Click to hide form');
        } else {
            $(this).text('Add a new title here')
        }

    });

    $('.suggestionBox').click(function() {
        $('#suggestSearchBox').show();
    });
    //gather search terms to send to Tastekid API

    $("#bookSearchTerms").keyup(function(event){
    if(event.keyCode == 13){
        $("#submitSearch").click();
    }
});

    $('#submitSearch').click(function() {
        if (('.showRecommends').length>0){
            $('.showRecommends').html("");
        };
        searchTerm = $('#bookSearchTerms').val();
        console.log(searchTerm)


        var params = {
            q: searchTerm,
            type: 'books',
            info: 1,
            k: '250853-Bookshel-AY9XODQO',

        };
        url = 'https://www.tastekid.com/api/similar?callback=?&q=' + searchTerm;


        $.getJSON(url, params, function(data) {
            console.log(data);
            myData = data.Similar.Results
            console.log(myData)

                if (myData.length < 1){
                $('.showRecommends').append("<p style='text-align:center;margin-top:5px;font-size:16pt;'>No results found</p>")
                }
                else{ 
                    $.each(myData, function(index, value) {
                var newTitle = value.Name
                var newDescription = value.wTeaser

                $('.showRecommends').append('<p class="recommendedTitle"> Title: ' + newTitle + '</p>');
                $('.showRecommends').append('<p class="recommendedDescription">About this book: <br>' + newDescription + '</p>')
                });
            };
            
        });
    });

$('#loginBox').click(function() {
    $(this).hide();
    console.log('hi');
    $('.signinWrapper').toggle();
});

$('#loginBoxBottom').click(function(){
    $(this).hide();
    window.scrollTo(0,0);
    $('.signinWrapper').toggle();
})
    // add form modal 
    var addModal = document.getElementById('addTitleModal');

    
    var btn = document.getElementById('bookAddImg');

    
    var span = document.getElementsByClassName('close')[0];

    
    btn.onclick = function() {
        addModal.style.display = 'block';
    }

   
    span.onclick = function() {
        addModal.style.display = 'none';
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
            if (event.target == addModal) {
                addModal.style.display = 'none';
            }
        }
        // show books modal
    var showModal = document.getElementById('showBooksModal');

    
    var btn = document.getElementById('bookDisplayImg');

    
    var span = document.getElementsByClassName('showClose')[0];

   
    btn.onclick = function() {
        showModal.style.display = 'block';
    }

    
    span.onclick = function() {
        showModal.style.display = 'none';
    }

    
    window.onclick = function(event) {
        if (event.target == showModal) {
            showModal.style.display = 'none';
        }
    }

    // show suggestion modal
    var suggestModal = document.getElementById('showSuggestionModal');

    
    var btn = document.getElementById('bookSuggestImg');

    
    var span = document.getElementsByClassName('suggestClose')[0];

     
    btn.onclick = function() {
        suggestModal.style.display = 'block';
    }

    
    span.onclick = function() {
        suggestModal.style.display = 'none';
    }

    
    window.onclick = function(event) {
        if (event.target == suggestModal) {
            suggestModal.style.display = 'none';
        }
    }

});