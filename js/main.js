let youtubeWidget;
function getMusic (){
$('.musicDescription').html('');
$('.youtube').html('');
$('.itunes').html('');
$('.spotify').html('');
$('.soundcloud').html('');


  let data = {
      'url': 'https://audd.tech/example1.mp3',
      'return': 'timecode,apple_music,deezer,spotify',
      'api_token': '8daf0596092934d5f121e4cf1694135'}


      let songName = $('#songName').val();
      let generalApi = 'https://api.audd.io/?jsonp=?';
      let apiCallBySongName = 'https://api.audd.io/findLyrics/?q='+ songName + '&return=deezer&api_token=8daf0596092934d5f121e4cf1694135d';
      console.log(apiCallBySongName);
      $.getJSON(apiCallBySongName , data , musicCallback);



       $.getJSON(generalApi , data , generalApiRes );
       function generalApiRes (resultt){

       }
      function musicCallback(musicData){

        let nameOfTheSong = musicData.result[0].title + ', ';
        let artistName = musicData.result[0].artist;
        let musicLinks = {};
           console.log(nameOfTheSong);
        let musicMedia = JSON.parse(musicData.result[0].media);
        console.log(musicMedia);
        musicMedia.forEach(function(object) {
          musicLinks[object.provider] = object.url;
      });

        $('.musicDescription').append(nameOfTheSong  , artistName);
        $('.youtube').append(musicLinks.youtube);
        let youtubeVideo = musicLinks.youtube;
        $('.itunes').append(musicLinks.apple_music);
        let itunesL = musicLinks.apple_music;
        $('.spotify').append(musicLinks.spotify);
        let spotifyL = musicLinks.spotify
        $('.soundcloud').append(musicLinks.soundcloud);
        let soundcloudL = musicLinks.soundcloud;

        $a = youtubeVideo;
        document.getElementById('youtubeVideo').href = $a;
        document.getElementById('youtubeImg').src="img/youtube.png";


        $a = itunesL;
        document.getElementById('itunesL').href = $a;
        document.getElementById('itunesImg').src="img/itunes.png";

        $a = spotifyL;
        document.getElementById('spotifyL').href = $a;
        document.getElementById('spotifyImg').src="img/spotify.png";

        $a = soundcloudL;
        document.getElementById('soundcloudL').href = $a;
        document.getElementById('soundcloudImg').src="img/soundcloud.png";
        youtubeWidget = youtubeVideo.substr(youtubeVideo.length - 11) + '?rel=0&autoplay=1';
        $('#video_fr').attr('src', 'https://www.youtube.com/embed/' + youtubeWidget);
        console.log(youtubeWidget);
        console.log(youtubeVideo);
  }


}
