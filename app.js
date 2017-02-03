
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


var searchSongs = function (query) {
  $.ajax({
    url: 'https://api.spotify.com/v1/search',
    data: {
      q: query,
      type: 'track'
    },
    success: function (response) {
      console.log(response);
      $.each(response.tracks.items,function(){
        $('#js-results').append(this.name+"<br>");
      });
    }
  });
};
