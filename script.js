//form
const addBtn = document.querySelector("#newBook");
const addForm = document.querySelector("#addForm");
const submitBtn = document.querySelector("#submit");
const table = document.querySelector(".books");
// const tbody = document.querySelector(".table-body");
//elements for adding a book

let myLibrary = [];

const imHappyForYou = new Book("I'm Happy for you", "Kay Wills Wyma", 231, "unread");
const theHobbit = new Book("The Hobbit", "JRR Tolkien", 298, "read");
const crazyRichAsians = new Book("Crazy Rich Asians", "Kevin Kwan", 576, "unread");

function defaultBooks(defaultBook) {
	myLibrary.push(defaultBook);
}

defaultBooks(imHappyForYou);
defaultBooks(theHobbit);
defaultBooks(crazyRichAsians);

console.log(myLibrary);

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.button = document.createElement("button");
	this.clear = document.createElement("button");
}
addBtn.addEventListener("click", () => {
	addBtn.hidden = true;
	addForm.hidden = false;
	submitBtn.hidden = false;
});

function addBookToLibrary() {
	//add book to the library through form input
	const title = document.querySelector("#title-input").value;
	const author = document.querySelector("#author-input").value;
	const pages = document.querySelector("#pages-input").value;
	let read = document.querySelector("#read-input").checked;
	if (read === true) {
		read = "read";
	} else read = "unread";
	let newBook = new Book(title, author, pages, read);
	myLibrary.push(newBook);
	console.log(myLibrary);
	// addForm.reset();
	//reset the form
	addForm.hidden = true;
	addBtn.hidden = false;
	submitBtn.hidden = true;
	displayBooks();
}

function displayBooks() {
	table.innerHTML = "";
	let tbody = document.createElement("tbody");
	let tr = document.createElement("tr");
	let th1 = document.createElement("th");
	let th2 = document.createElement("th");
	let th3 = document.createElement("th");
	let th4 = document.createElement("th");
	table.appendChild(tbody);
	tbody.appendChild(tr);
	tr.appendChild(th1);
	tr.appendChild(th2);
	tr.appendChild(th3);
	tr.appendChild(th4);
	th1.textContent = "title";
	th2.textContent = "author";
	th3.textContent = "pages";
	th4.textContent = "read";

	myLibrary.forEach((book) => {
		let tr = document.createElement("tr");
		let text1 = document.createElement("td");
		let text2 = document.createElement("td");
		let text3 = document.createElement("td");
		let text4 = document.createElement("td");

		tbody.appendChild(tr);
		tr.appendChild(text1).textContent = book.title;
		tr.appendChild(text2).textContent = book.author;
		tr.appendChild(text3).textContent = book.pages;
		tr.appendChild(text4).textContent = book.read;
	});
}
displayBooks();
submitBtn.addEventListener("click", addBookToLibrary);
