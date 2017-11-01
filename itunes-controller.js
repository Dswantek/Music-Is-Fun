function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawResults); //after get music by artist returns what are you doing with the objects?
  }

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
      <button type="button" class="btn btn-primary btn-md" onclick="drawPlaylist(playlist)"><i class="fa fa-plus" aria-hidden="true"></i></button>
      <audio controls class="audio">
      <source src="${song.preview}" type="audio/ogg">
    </audio>
</h4>
  </div>
      `
    }

    document.getElementById('songs').innerHTML = template
    // document.getElementById('playlist').innerHTML = template
  }


  document.addEventListener('play', function (e) {
    var audios = document.getElementsByClassName('audio');
    for (var i = 0, len = audios.length; i < len; i++) {
      if (audios[i] != e.target) {
        audios[i].pause();
      }
    }
  }, true);


  function drawPlaylist(arr) {
    var playlistTemplate = ''
    for (var i = 0; i < arr.length; i++) {
      var playlist = arr[i]
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

  drawResults(songs)



}
