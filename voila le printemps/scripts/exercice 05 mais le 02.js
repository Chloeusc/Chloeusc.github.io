"bouton d'utilisateur" 
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('veuillez saisir votre nom.');
  localStorage.setItem ('nom', myName); 
  myHeading.textContent = 'le printemps est de retour, ' + myName;
}

if (!localStorage.getItem ('nom')) {
	setUserName(); 
} else {
	let storeName = localStorage.getItem ('nom'); 
	myHeading.textContent = 'le printemps est de retour, ' + storeName;
}

myButton.addEventListener ('click', function () {
	setUserName(); 
});