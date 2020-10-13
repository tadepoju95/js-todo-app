
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
			listingItems += "<br><input value='" + getValues[i] + "' " + "id='" + i + "'" + "readonly/>" + "<button onclick='edit("+ i + ")'>" + "edit"  + "</button>" + "<button onclick='update("+ i + ")'>" + "update"  + "</button>";
		}
	}
	 listItems.innerHTML = listingItems;
}

let edit = (id) => {
	console.log(id)
	//let removeAtrribute = document.getElementById('id').disabled = false;
	let disableReadOnly = document.getElementById(id).readOnly = false;
	let inputFocus = document.getElementById(id).focus();
}

let update = (id) => {
	let updateTodoItem = document.getElementById(id).value;
	let getValues = JSON.parse(localStorage.getItem('userInput'));
	getValues.splice(id, 1, updateTodoItem);
	localStorage.setItem('userInput', JSON.stringify(getValues));

}


let deleteOne = () => {

}


/*
if(document.getElementById('listing')) {
		let editInputValue = document.getElementsByClassName('form-control')[0].value = 'ha';
	}

*/
