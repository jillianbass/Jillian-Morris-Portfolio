(function () {
  var IMAGES = [
    'images/jm-01.jpg',
    'images/jm-02.jpg',
    'images/jm-03.jpg',
    'images/jm-04.jpg',
    'images/jm-05.jpg',
    'images/jm-06.jpg',
    'images/jm-07.webp',
    'images/jm-08.jpg',
    'images/jm-09.jpg',
    'images/jm-010.jpg',
    'images/jm-011.jpg',
    'images/jm-012.jpg',
    'images/jm-013.jpg',
    'images/jm-014.jpg',
    'images/jm-015.jpg'
  ];

  var ROTATE_MS = 4000;

  var imgA = document.getElementById('rotatorA');
  var imgB = document.getElementById('rotatorB');
  var current = 0;
  var showingA = true;

  function preload(src) {
    var img = new Image();
    img.src = src;
    return img;
  }

  imgA.src = IMAGES[0];
  imgA.classList.add('is-visible');
  preload(IMAGES[1 % IMAGES.length]);

  function next() {
    current = (current + 1) % IMAGES.length;
    var incoming = showingA ? imgB : imgA;
    var outgoing = showingA ? imgA : imgB;

    incoming.src = IMAGES[current];
    incoming.classList.add('is-visible');
    outgoing.classList.remove('is-visible');

    showingA = !showingA;
    preload(IMAGES[(current + 1) % IMAGES.length]);
  }

  setInterval(next, ROTATE_MS);
})();
