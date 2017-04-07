/**
* Spotify API functions
* @author: Michael Gingras
*/

var songarray = [];

var searchSongs = function (query) {
  $.ajax({
    url: 'https://api.spotify.com/v1/search',
    data: {
      q: query,
      type: 'track',
      limit: 5
    },
    success: function (response) {
      console.log(response);
      $('#js-results').empty();
      songarray = [];

      $.each(response.tracks.items,function(index){
          var song = this.name;
          var artist = this.artists[0].name;
          var url = this.preview_url;
          songarray[index] = {"song": song, "artist": artist, "url": url};
          $('#js-results').append("<p id='js-song-link' class='query-result' data-id="+index+">"+ song + " by " + artist +"</p><br>");
      });
    }
  });
};
