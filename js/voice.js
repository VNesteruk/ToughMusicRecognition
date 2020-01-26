var blob;
let deezid;
navigator.mediaDevices.getUserMedia({ audio: true})
       .then(stream => {
      const mediaRecorder = new MediaRecorder(stream);

      document.querySelector('#start').addEventListener('click', function(){
      	mediaRecorder.start();
      });
    var audioChunks = [];
    mediaRecorder.addEventListener("dataavailable",function(event) {
        audioChunks.push(event.data);
    });

    mediaRecorder.addEventListener("stop", function() {
        blob = new Blob(audioChunks, {
            type: 'audio/wav'
        });


});
    document.querySelector('#stop').addEventListener('click', function(){
      	 mediaRecorder.stop();

      });
});

var getSoundRequest = function(blob){
  $('.musicDescriptionDeezer').html('');
    var data = new FormData();
    let artistIDD, songNameD;
    data.append('file', blob);

    $.ajax({
        url:'https://api.audd.io/recognize/?api_token=8daf0596092934d5f121e4cf1694135d&return=deezer',
        type:'POST',
        data: data,
        async: false,
        contentType: false,
        processData: false,
        success: function(response){
          console.log(response);
          deezid = response.result.deezer.id;
          artistIDD = response.result.artist + ', ';
          songNameD = response.result.title ;
          console.log(deezid);
          console.log(artistIDD);

        }


      })
$('.musicDescriptionDeezer').append(artistIDD  , songNameD);

}

function getMusic2()
{
  getSoundRequest(blob);
  var w = document[typeof document.getElementsByClassName === 'function' ? 'getElementsByClassName' : 'querySelectorAll']('deezer-widget-player');
	for (var i = 0, l = w.length; i < l; i++) {
		w[i].innerHTML = '';
		var el = document.createElement('iframe');
		el.src = 'https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=ff0202&layout=dark&size=medium&type=tracks&id=' + deezid + '&app_id=1';
		el.scrolling = w[i].getAttribute('data-scrolling');
		el.frameBorder = w[i].getAttribute('data-frameborder');
		el.setAttribute('frameBorder', w[i].getAttribute('data-frameborder'));
		el.allowTransparency = w[i].getAttribute('data-allowTransparency');
		el.width = w[i].getAttribute('data-width');
		el.height = w[i].getAttribute('data-height');
		w[i].appendChild(el);
	}
}
