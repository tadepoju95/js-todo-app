
let add = () => {
	let userInput = document.getElementsByClassName('form-control')[0].value;
	localStorage.setItem('userInput', userInput);
}

let getOne = () => {
	let storedValue = localStorage.getItem('userInput');
	document.getElementsByClassName('form-control')[0].value = storedValue;
}





