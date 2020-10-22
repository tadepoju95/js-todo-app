
let listValues = (todo, todos) => {
	//let userInput = document.getElementsByClassName('form-controls')[0].value;
	let getValues = JSON.parse(localStorage.getItem('userInput'));
	if(getValues === null) {
		getValues = [];
	}
	console.log(getValues);
	let getTitle = todo.title;
	getValues.push(getTitle);
	localStorage.setItem('userInput', JSON.stringify(getValues));
	let listItems = document.getElementsByClassName('user-value');
	let ulElement = '<ul>';
	for(let i = 0; i < getValues.length; i++) {
		ulElement += '<li>' + getValues[i] + '</li>';
	}

	 ulElement += '</ul>'
	 listItems.innerHTML = ulElement;
	  
}

let fetchTodos = () => {
	axios.get('https://jsonplaceholder.typicode.com/todos')
		 .then(response => {
		 	let todos = response.data;
		 	console.log(`GET todos`, todos); 
		 	//listValues(todos);
		 })
		 .catch(error => console.error(error));
}
fetchTodos();

/*
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
*/


/*
let listValues = () => {
	let listItems = document.getElementsByClassName('user-value')[0];
	let getValues = JSON.parse(localStorage.getItem('userInput'));
	console.log(getValues);
	let listingItems = '';
	for(let i = 0; i < getValues.length; i++) {
		if(localStorage.getItem('userInput') !== null) {
			listingItems += "<br><input value='" + getValues[i] + "' " + "id='" + i + "'" + "readonly/>" + "<button onclick='edit("+ i + ")' id='editItems'>" + "edit" + "</button>" + "<button onclick='update("+ i + ")' id='updateItems'>" + "update"  + "</button>" + "<button onclick='deleteItems("+ i + ")' id='deleteItems'>" + "delete"  + "</button>";
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


let deleteItems = (id) => {
	let getValues = JSON.parse(localStorage.getItem('userInput'));
	getValues.splice(id, 1);
	localStorage.setItem('userInput', JSON.stringify(getValues));
	let deleteInputElement = document.getElementById(id);
	deleteInputElement.parentNode.removeChild(deleteInputElement); 
	let deleteEditButton = document.getElementById('editItems');
	deleteEditButton.parentNode.removeChild(deleteEditButton);
	let deleteUpdateButton = document.getElementById('updateItems');
	deleteUpdateButton.parentNode.removeChild(deleteUpdateButton);
	let deleteButton = document.getElementById('deleteItems');
	deleteButton.parentNode.removeChild(deleteButton);
}
*/

