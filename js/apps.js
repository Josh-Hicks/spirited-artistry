//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//Add an image to overlay div
$overlay.append($image);

//Add overlay div to DOM 
$("body").append($overlay);

  //Add caption to the overlay picture
  $overlay.append($caption);
  $overlay.append("<p>&#8617;&nbsp;Back</p>")

//Capture the click event on a link to an image
$("#gallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  //Show the overlay.
  $overlay.show();
  
  
  //Get child's alt attribute and set caption to that 
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
 $overlay.hide();
});