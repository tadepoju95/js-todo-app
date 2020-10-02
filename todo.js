
let add = () => {
	let userInput = document.getElementsByClassName('form-control')[0].value;
	let arrayOfValues = [];
	arrayOfValues.push(userInput);
	localStorage.setItem(localStorage.length + 1,JSON.stringify(arrayOfValues));
	document.getElementsByClassName('form-control')[0].value = '';
	getOne();

}

let getOne = () => {
	let listItems = document.getElementById('listing');
	let ulElement = '<ul>';
	for(let i = 0; i < localStorage.length; i++) {
		getValues = JSON.parse(localStorage.getItem(localStorage.key(i)));
		ulElement += '<li>' + getValues + '</li>';
	}
	 ulElement += '</ul>'
	 listItems.innerHTML = ulElement;
}


let edit = () => {
	let editInputValue = document.getElementsByClassName('form-control')[0].contentEditable = 'true';

}

let deleteOne = () => {
	let deleteUserInput = document.getElementsByClassName('form-control')[0].value = '';
	localStorage.removeItem('userInput'); 

}




