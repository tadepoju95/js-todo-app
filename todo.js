
let setValues = () => {
	let userInput = document.getElementsByClassName('form-control')[0].value;
	let getValues = JSON.parse(localStorage.getItem('userInput'));
	if(getValues === null) {
		getValues = [];
	}
	console.log(getValues);
	getValues.push(userInput);
	localStorage.setItem('userInput', JSON.stringify(getValues))
	document.getElementsByClassName('form-control')[0].value = '';
	listValues();
}

let listValues = () => {
	let listItems = document.getElementById('listing');
	let getValues = JSON.parse(localStorage.getItem('userInput'));
	console.log(getValues);
	let ulElement = '<ul>';
	for(let i = 0; i < getValues.length; i++) {
		if(localStorage.getItem('userInput') !== null) {
			ulElement += '<li>' + getValues[i] + '</li>';
		}
	}
	 ulElement += '</ul>'
	 listItems.innerHTML = ulElement;
}

let edit = () => {
	let listItems = document.getElementById('listing');
	let editInputValue = document.getElementsByClassName('form-control')[0];
	console.log(editInputValue);
	let getValues = JSON.parse(localStorage.getItem('userInput'));
		if(listItems) {
			editInputValue.value = getValues[0];
		}	
}

/*
let deleteOne = () => {
	let deleteUserInput = document.getElementsByClassName('form-control')[0].value = '';
	localStorage.removeItem('userInput'); 

}
*/

/*
if(document.getElementById('listing')) {
		let editInputValue = document.getElementsByClassName('form-control')[0].value = 'ha';
	}

*/
