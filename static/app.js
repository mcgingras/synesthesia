/**
* General application functions
* @author: Michael Gingras
*/


// PAGE ID
var pageID = $(".js-main").data('page');

/**
* MODAL FUNCTIONS ~---
*/
$('#js-add-song').on('click',function(){
  $('#modal').show();
  $('.js-play-song').removeClass('blurry-text');
});

$('#close').on('click', function(){
  $('#modal').css('display', 'none');
})

$("#js-search-song").keyup(function(){
  var query = $(this).val();
  searchSongs(query);
});


/**
* AUDIO FUNCTIONS ~---
*/
$(document).on('click', "#js-play-song", function(){
  var url = $(this).data('url');

  if($(this).hasClass("js-paused")){
    audioObject.play();
    $(".js-paused").addClass("js-playing");
    $(".js-paused").removeClass("js-paused");
  }

   else if($(this).hasClass('js-playing')){
     audioObject.pause();
     $(".js-playing").addClass("js-paused");
     $(".js-playing").removeClass("js-playing");
   }

   else if($('.js-playing').length > 0){
     audioObject.pause();
     $(".js-playing").removeClass("js-playing");
     $(".js-paused").removeClass('js-paused');
     audioObject = new Audio(url);
     audioObject.play();
     $(this).addClass('js-playing');
   }

   else{
   audioObject = new Audio(url);
   audioObject.pause();
   console.log(audioObject);
   audioObject.play();
   $(this).addClass("js-playing");

   audioObject.addEventListener('ended', function () {
        $(this).removeClass("js-playing");
    });
  }

});
