// Single line JS comment

/*
    Multi
    line
    JS
    comment
*/

// When working with jQuery, you will usually put all your code inside this block:
// $(document).ready(function() {  CODE AND STUFF  });

// The HTML you wrote is a document, and our JS is going to modify that document. So,
// we want to make sure the document is ready before we start doing any JS.

$(document).ready(function() {
    // So how do we use JS to change our HTML document?
    // jQuery uses CSS-like selectors to identify HTML elements. Then, we just say what
    // action we want to take on that element. In this example, we select the #mediaList list
    // and APPEND another <li> to the end of it
    $("#mediaList").append('<li><img src="http://cdn.cutestpaw.com/wp-content/uploads/2012/01/I-heard-hes-good-at-coding-l.jpg"></li>');

    /*
        TODO: Hide all of the images

        Hint:
            - Google 'jquery hide'
    */
    // $("img")

    /*
        TODO: Fade in the images for 2 seconds

        Hint:
            - Google 'jquery fadein'
            - 2 seconds equals 2000 milliseconds
    */
    // $("img")

    
    // STOP HERE UNTIL WE MOVE ON TO FEED1.HTML







    /*
        TODO: To use the Instagram API (and most APIs), you need to register a developer account.
        
        1. Go to http://instagram.com/developer/ and register an application. Where it asks you 
        for a website and description you can use the ChickTech website and say you are doing 
        this as a coding exercise

        2. Select "Register a new client". You can use the same website and description as before.
        Where it asks you for redirect uri, you can just put in the same website.

        3. You'll be taken to a page that lists your CLIENT ID. Replace the ? below with your
        client id. You'll need this to access the Instagram API.
    */
    data = {
        client_id: "?"
    }

    /*
        Now what we want to do is to get all the public Instagram photos that are tagged with
        #thanksgiving

        TODO: Search the instagram API documentation and replace the question mark in apiUrl
        with the appropriate endpoint for getting media with a certain tag

        Hints:
            - http://instagram.com/developer/endpoints/tags/

        TODO: The tag-name we want to search for is 'thanksgiving'
    */
    var apiUrl = "https://api.instagram.com/v1/?/";


    // jQuery's function to actually make the Instagram API call
    $.ajax({
        dataType: "jsonp",
        url: apiUrl,  // This is the url you got just constructed from the docs
        data: data,  // This contains your client id, and it lets Instagram know who is making the request
        success: function(response) {
           // We send Instagram a request for Thankgiving photos, and it sends us a response.
           // The response is going to have a bunch of data in it, including the photos we want
           // The data is going to seem messy to you, so pause when you get here and we'll walk
           // you through how to parse the data to get the information you want.
            $.each(response.data, function(index, media) {
                // TODO: Add a list item with an image for each media item in the response

                $("#mediaList").append('?');

                /*
                    Hints:
                        - media.images.standard_resolution.url contains the image url
                        - Google "jQuery add image to list" (and remember, we've alredy done this!)

                    Bonus: Include the name and/or photo of the person who posted this media item
                           as well as the text of the photo.

                    Hints:
                        - media.user.full_name
                        - media.user.profile_picture
                        - media.caption.text
                        - Be careful if text isn't filled out! One way we candle this is with 
                        a JS if-statement
                */
            });
        }
    });

});