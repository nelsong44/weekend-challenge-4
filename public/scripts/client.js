console.log('JQ linked');

// creating new angular module named 'myApp'
var galleryApp = angular.module('galleryApp', []);

// adding a controller to the app
galleryApp.controller('GalleryController', function() {
  console.log('NG linked'); //make sure angular is linked properly // NG will log in console once linked in HTMl
  var vm = this; // creating two-way bind - connecting js and html

    vm.imgArray = [
      { src: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/19029626_10109936321254490_2928702935349440072_n.jpg?oh=9e48bef3d202e9ed22d28dbc8e3c21a1&oe=59AAB3EF', desc: 'premie photo' },
      { src: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/19030279_10109936321019960_7300211073190963307_n.jpg?oh=0cae619ae85e56563470444ebd962bc5&oe=59DC934B', desc: 'the turtle' },
      { src: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/19059446_10109936321044910_957839958894996608_n.jpg?oh=70a62a6f0a1d62f79a46b5b3dba17221&oe=59A44FF3', desc: 'ander and lucy' },
      { src: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/19029473_10109936365181460_3928848830057330383_n.jpg?oh=fd6122c76c51d6cad7fbc0b61c530b63&oe=59A9ADB5', desc: 'al and gary' },
      { src: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/19060069_10109936321229540_5137626086665318321_n.jpg?oh=65a8b6204df794f1504b983bc56e3981&oe=59E3EADA', desc: 'top surgery' },
      { src: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/18952870_10109936320995010_8894780250266909081_n.jpg?oh=e94f1e16c84232c118c16847dfee76c7&oe=59A4785B', desc: 'caricature' }
    ]; // end array




  // }; // end loadGallery
}); // end controller
