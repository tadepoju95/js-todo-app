
let setValues = () => {
	let userInput = document.getElementsByClassName('form-controls')[0].value;
	let getValues = JSON.parse(localStorage.getItem('userInput'));
	if(getValues === null) {
		getValues = [];
	}
	console.log(getValues);
	getValues.push(userInput);
	localStorage.setItem('userInput', JSON.stringify(getValues))
	document.getElementsByClassName('form-controls')[0].value = '';
	listValues();
}

let listValues = () => {
	let listItems = document.getElementsByClassName('user-value')[0];
	let getValues = JSON.parse(localStorage.getItem('userInput'));
	console.log(getValues);
	let listingItems = '';
	for(let i = 0; i < getValues.length; i++) {
		if(localStorage.getItem('userInput') !== null) {
			listingItems += "<br><input value='" + getValues[i] + "' " + "id='" + i + "'" + "readonly/>" + "<button onclick='edit("+ i + ")'>" + "edit"  + "</button>";
		}
	}
	 listItems.innerHTML = listingItems;
}

let edit = (id) => {
	console.log(id)
	let removeAtrribute = document.getElementById('updateButton').disabled = false;
	let disableReadOnly = document.getElementById('inputId').readOnly = false;
	let inputFocus = document.getElementsByClassName('user-value')[0].focus();
}

let update = () => {

}


let deleteOne = () => {
	let deleteUserInput = document.getElementsByClassName('form-control')[0].value = '';

}


/*
if(document.getElementById('listing')) {
		let editInputValue = document.getElementsByClassName('form-control')[0].value = 'ha';
	}

*/
