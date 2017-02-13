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
* ADDING TO FIREBASE ~---
*/
$(document).on('click','#js-song-link',function(){
  var id = $(this).data(id).id;

  var song   = songarray[id].song;
  var artist = songarray[id].artist;
  var url    = songarray[id].url;

  writeSongData(pageID,song,artist,url);

  $('#modal').css('display', 'none');

});


var songRef = firebase.database().ref('albums/'+pageID);
songRef.on('child_added', function(data) {
  var song = data.val().song;
  var artist = data.val().artist;
  var url = data.val().url;
  addtoPlaylist(song,artist,url);
});

function addtoPlaylist(song,artist,url){
  $('#js-song-end').before('<p id="js-play-song" data-url='+url+'>'+song+' by ' +artist+'</p>');
}


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
