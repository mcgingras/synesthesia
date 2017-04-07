/**
* Firebase initialization and DB calls.
* @author: Michael Gingras
*/
  var config = {
    apiKey: "AIzaSyCqnANgYrB8Yzk-ALHfqdFnk8IDOuwOkjw",
    authDomain: "project-1969575520459744786.firebaseapp.com",
    databaseURL: "https://project-1969575520459744786.firebaseio.com",
    storageBucket: "project-1969575520459744786.appspot.com",
    messagingSenderId: "392218222733"
  };
  firebase.initializeApp(config);

  // Initialize DB
  var database = firebase.database();

  function writeSongData(pageId, song, artist, link) {
    firebase.database().ref('albums/' +pageId).push({
      song: song,
      artist: artist,
      url: link,
    });
  }

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
