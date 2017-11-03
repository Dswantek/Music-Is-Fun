function ItunesService(){

var myPlaylist = [];
var songList = [];


  this.getMyPlaylist = function (){
    return JSON.parse(JSON.stringify(myPlaylist))
  }

  this.getSongList = function (){
    return JSON.parse(JSON.stringify(songList))
  }


    this.getMusicByArtist = function(artist) {

      //allows requests to localhost: 8080 otherwise blocked by itunes
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      
      //changes the button to loading while songs load
      $('#get-music-button').text('LOADING....');
      
      //modifies the objects to reduce the excess data
      return $.getJSON(apiUrl).then(function(response){
        songList = response.results.map(function (song) {
                  return {
                      title: song.trackName,
                      albumArt: song.artworkUrl100,
                      artist: song.artistName,
                      collection: song.collectionName,
                      price: song.collectionPrice,
                      preview: song.previewUrl
                    };
                })
        //changes button back to GET MUSIC once songs are loaded
        $('#get-music-button').text('GET MUSIC');
        return songList;
      })
    }

      this.addSong = function addSong(preview, callWhenDone) {
        debugger
        for (var i = 0; i < songList.length; i++) {
          var mySong = songList[i].preview
          if (mySong == preview) {
            myPlaylist.push(songList[i])
            
            return callWhenDone(myPlaylist)
          }
        }
        callWhenDone(myPlaylist)
      }

}