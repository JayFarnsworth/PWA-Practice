if ('serviceWorker' in navigator) {
  navigator.serviceWorker
            .register('./service-worker.js')
            .then(function() { console.log('Service Worker Registered'); });
}
function previewImage(event){
  event.preventDefault();
  document.querySelector('.img-capture').src = '';
}
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#preview').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}
document.querySelector('#imgInp').addEventListener('change', function() {
  readURL(this)
})
// $("#imgInp").change(function () {
//   readURL(this);
// });
