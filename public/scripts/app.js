
  window.onload = function() {
    let message = localStorage.getItem("message") || 'Your message will display here';
    $('#message').html(message);
    $('#display').html(message);
  }


  $('#button').click(() => {
    console.log('click')
    let message = $('#message').val();
    console.log(message);
    $('#display').html(message);
    localStorage.setItem("message", message);
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }

document.querySelector('.camera-button').addEventListener('click', openCamera)
document.querySelector('#image-capture').addEventListener('click', takeSnapshot)
var video = document.querySelector('.video-element');
function openCamera(event){
  event.preventDefault();
  console.log('hi')
  navigator.getUserMedia(
    // Options
    {
      video: true
    },
    // Success Callback
    function (stream) {

      // Create an object URL for the video stream and
      // set it as src of our HTLM video element.
      video.src = window.URL.createObjectURL(stream);

      // Play the video element to show the stream to the user.
      video.play();

    },
    // Error Callback
    function (err) {

      // Most common errors are PermissionDenied and DevicesNotFound.
      console.error(err);

    }
    
  );
}
function takeSnapshot(event) {
  event.preventDefault();
  var hidden_canvas = document.querySelector('canvas'),
    video = document.querySelector('video.camera_stream'),
    image = document.querySelector('img.photo'),

    // Get the exact size of the video element.
    width = video.videoWidth,
    height = video.videoHeight,

    // Context object for working with the canvas.
    context = hidden_canvas.getContext('2d');

  // Set the canvas to the same dimensions as the video.
  hidden_canvas.width = width;
  hidden_canvas.height = height;

  // Draw a copy of the current frame from the video on the canvas.
  context.drawImage(video, 0, 0, width, height);

  // Get an image dataURL from the canvas.
  var imageDataURL = hidden_canvas.toDataURL('image/png');

  // Set the dataURL as source of an image element, showing the captured photo.
  image.setAttribute('src', imageDataURL);

}