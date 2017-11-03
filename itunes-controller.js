function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawResults); //after get music by artist returns what are you doing with the objects?
  }

  // itunesService.getSongList(ready)

  // function ready(data){
  //   drawResults(data)
  // }

  //Start coding here
  function drawResults(songList) {
    var template = ''
    for (var i = 0; i < songList.length; i++) {
      var song = songList[i]
      template += `
      <div class="song-card col-xs-12 text-center black-border">
      <h4>${song.title}</h4>
      <h4><img src="${song.albumArt}"></h4>
      <h4>${song.artist}</h4>
      <h4>${song.collection}</h4>
      <h4>$${song.price}</h4>
      <h4>
      <button type="button" class="btn btn-primary btn-md addSong" onClick="app.controllers.itunesCtrl.addSong('${song.preview}')"><i class="fa fa-plus" aria-hidden="true"></i></button>
      <audio controls class="audio">
      <source src="${song.preview}" type="audio/ogg">
    </audio>
</h4>
  </div>
      `
    }
    document.getElementById('songs').innerHTML = template
  }


  
  
  function drawPlaylist(arr) {
    var playlistTemplate = ''
    for (var i in arr) {
      var song = arr[i];
      playlistTemplate += `
      <div class="song-card col-xs-12 text-center black-border">
      <h4>${song.title}</h4>
      <h4><img src="${song.albumArt}"></h4>
      <h4>${song.artist}</h4>
      <h4>${song.collection}</h4>
      <h4>$${song.price}</h4>
      <h4>
      <audio controls class="audio">
      <source src="${song.preview}" type="audio/ogg">
      </audio>
      </h4>
      </div>
      `
    }
    document.getElementById('playlist').innerHTML = playlistTemplate
  }
  
  this.addSong = function addSong(preview){
    itunesService.addSong(preview, drawPlaylist)
  }
  
  // document.addEventListener('click', function(e) {
  //   var addSongs = document.getElementsByClassName('addSong');
  //   for(var i=0, len= addSongs.length; i < len; i++) {
  //     if(addSongs[i] != e.target){
  //       addSongs[i].push.drawPlaylist();
  //     }
  //   }
  // }, true);
  
  document.addEventListener('play', function (e) {
    var audios = document.getElementsByClassName('audio');
    for (var i = 0, len = audios.length; i < len; i++) {
      if (audios[i] != e.target) {
        audios[i].pause();
      }
    }
  }, true);
  
  drawResults(songs)
  
  
  
}
