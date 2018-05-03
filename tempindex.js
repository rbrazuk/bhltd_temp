var images = [
  "rip.jpg",
  "rip2.jpg",
  "ty_hamms.jpg",
  "pinball.jpg"
];

function getRandomImage() {
  return images[Math.floor(Math.random() * images.length)];
}

document.getElementById('random')
  .setAttribute('src', 'images/' + getRandomImage());
