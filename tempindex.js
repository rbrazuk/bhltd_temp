var images = [
  "rip.jpg",
  "ty_hamms.jpg",
  "pinball.jpg"
];

function getRandomImage() {
  return images[Math.floor(Math.random() * images.length)];
}

document.getElementById('random')
  .setAttribute('src', 'images/' + getRandomImage());
