
let add = () => {
	let userInput = document.getElementsByClassName('form-control')[0].value;
	localStorage.setItem(localStorage.length + 1, userInput); 
	document.getElementsByClassName('form-control')[0].value = '';
	let listValues = document.getElementById('listing').innerHTML = '<li>' + userInput + '</li>';


}

let getOne = () => {
	let listItems = document.getElementById('listing');
	let getValues = '';
	for(let i = 0; i < localStorage.length; i++) {
		getValues = localStorage.getItem(localStorage.key(i));
		console.log(getValues);
		listItems.innerHTML += '<li>' + getValues + '</li>';
	}
}

let edit = () => {
	let editInputValue = document.getElementsByClassName('form-control')[0].contentEditable = 'true';

}

let deleteOne = () => {
	let deleteUserInput = document.getElementsByClassName('form-control')[0].value = '';
	localStorage.removeItem('userInput'); 

}


/*
let add = () => {
	let userInput = document.getElementsByClassName('form-control')[0].value;
	localStorage.setItem(localStorage.length + 1, userInput); 
	document.getElementsByClassName('form-control')[0].value = '';
	let listValues = document.getElementById('listing').innerHTML = '<li>' + userInput + '</li>';


}

let getOne = () => {
	let listItems = document.getElementById('listing');
	let getValues = '';
	for(let i = 0; i < localStorage.length; i++) {
		getValues = localStorage.getItem(localStorage.key(i));
		console.log(getValues);
		listItems.innerHTML += '<li>' + getValues + '</li>';
	}
}
*/