/**
* Spotify API functions
* @author: Michael Gingras
*/
var searchAlbums = function (query) {
  $.ajax({
    url: 'https://api.spotify.com/v1/search',
    data: {
        q: query,
        type: 'album'
    },
    success: function (response) {
        console.log(response);

        $.each(response.albums.items,function(){
          $('#js-results').append(this.name+"<br>");
        });
    }
  });
};

var con;

var searchSongs = function (query) {
  $.ajax({
    url: 'https://api.spotify.com/v1/search',
    data: {
      q: query,
      type: 'track'
    },
    success: function (response) {
      console.log(response);
      var start = songarray.length;

      // if I want to limit.
      for (var i = start; i < start + 5; i++) {
        console.log(i);
        var song = response.tracks.items[i].name;
        var artist = response.tracks.items[i].artists[0].name;
        var url = response.tracks.items[i].preview_url;

        songarray[i] = {"song": song, "artist": artist, "url": url};

        $('#js-results').append("<p id='js-song-link' data-id="+i+">"+ song + " by " + artist +"</p><br>");


      }
      // if I want all 20 results
      // $.each(response.tracks.items,function(){
      //   $('#js-results').append(this.name + " by " + this.artists[0].name +"<br>");
      // });
    }
  });
};
