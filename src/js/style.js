$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll < 200) {
          $(".fixed-top").css("background" , "transparent");
        }
  
        else{
            $(".fixed-top").css("background" , "#F5CD79");  	
        }
    })
  })

  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
  });


  var request = new XMLHttpRequest()

  request.open('GET', 'https://discordapp.com/api/guilds/643410260425703456/widget.json', true)
  request.onload = function() {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
  
    if (request.status >= 200 && request.status < 400) {
      data.forEach(channels => {
        console.log(channels.name)
      })
    } else {
      console.log('error')
    }
  }
  
  request.send()