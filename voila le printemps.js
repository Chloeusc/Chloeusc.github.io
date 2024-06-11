let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'fleur-de-cerisier (1).png'){
    myImage.setAttribute ('src','personnes heureuses.png');
  } else {
    myImage.setAttribute ('src','fleur-de-cerisier (1).png');
  }
});