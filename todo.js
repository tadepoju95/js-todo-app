
let fetchTodos = () => {
    let getValues = JSON.parse(localStorage.getItem('todoArray'));
    if(getValues === null) {
       getValues = []
	   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
		 .then(response => {
		 	let todos = response.data;
           for(let i = 0; i < todos.length; i++) {
           	getValues.push(todos[i].title);
           }
           	localStorage.setItem('todoArray', JSON.stringify(getValues));
           	listValues();
		 })
		 .catch(error => console.error(error));  
    }
}
fetchTodos();


let setValues = () => {
	let userInput = document.getElementsByClassName('form-controls')[0].value;
	let getValues = JSON.parse(localStorage.getItem('todoArray'));
	getValues.push(userInput);
	localStorage.setItem('todoArray', JSON.stringify(getValues)) 
	document.getElementsByClassName('form-controls')[0].value = '';
	listValues();
}


let listValues = () => {
	let divElement = document.getElementsByClassName('user-value')[0];
	let getValues = JSON.parse(localStorage.getItem('todoArray'));
	let createElements = '';
	for(let i = 0; i < getValues.length; i++) {
		createElements += "<br><input value='" + getValues[i] + "' " + "id='" + i + "'" + "readonly/>" + "<button onclick='edit("+ i + ")' id='editItems'>" + "edit" + "</button>" + "<button onclick='update("+ i + ")' id='updateItems'>" + "update"  + "</button>" + "<button onclick='deleteItems("+ i + ")' id='deleteItems'>" + "delete"  + "</button>";
	}
	 divElement.innerHTML = createElements;
}


let edit = (id) => {
	let disableReadOnly = document.getElementById(id).readOnly = false;
	let inputFocus = document.getElementById(id).focus();
}


let update = (id) => {
	let updateTodoItem = document.getElementById(id).value;
	let getValues = JSON.parse(localStorage.getItem('todoArray'));
	getValues.splice(id, 1, updateTodoItem);
	localStorage.setItem('todoArray', JSON.stringify(getValues));

}


let deleteItems = (id) => {
	let getValues = JSON.parse(localStorage.getItem('todoArray'));
	getValues.splice(id, 1); 
	localStorage.setItem('todoArray', JSON.stringify(getValues));
	listValues();
}

