var $overlay=$('<div id="overlay"></div>'),$image=$("<img>"),$caption=$("<p></p>");$overlay.append($image),$("body").append($overlay),$overlay.append($caption),$overlay.append("<p>&#8617;&nbsp;Back</p>"),$("#gallery a").click(function(a){a.preventDefault();var e=$(this).attr("href");$image.attr("src",e),$overlay.show();var r=$(this).children("img").attr("alt");$caption.text(r)}),$overlay.click(function(){$overlay.hide()});