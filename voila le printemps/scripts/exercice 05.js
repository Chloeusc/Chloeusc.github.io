let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'image/fleur-de-cerisier (1).png'){
    myImage.setAttribute ('src','image/personnes heureuses.png');
  } else {
    myImage.setAttribute ('src','image/fleur-de-cerisier (1).png');
  }
});