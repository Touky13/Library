const myLibrary = [];

function Book(title, author, length, status, cover, id) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.length = length;
  this.status = status;
  this.cover = cover;
  this.id = id;
}

function addBookToLibrary(title, author, length, status, cover, id) {
  // take params, create a book then store it in the array
  let book = new Book(title, author, length, status, cover, id);
  return myLibrary.push(book);
}

addBookToLibrary("test", "John", "32 pages", "read", "", crypto.randomUUID());
addBookToLibrary("test2", "Marc", "50 pages", "not read", "", crypto.randomUUID());
addBookToLibrary("test3", "Alice", "74 pages", "read", "", crypto.randomUUID());
console.log(myLibrary);
 

myLibrary.forEach (book => {
  let div = document.createElement("div");
  div.classList.add("card");
  document.querySelector(".main").appendChild(div);
  let img = document.createElement("img");
  if (book.cover === '') {
  img.src = 'assets/book-cover-placeholder-hd.png';
  }
  else { img.src = book.cover };
  div.appendChild(img);
  let h3 = document.createElement("h3");
  h3.setAttribute("id", "title");
  h3.textContent = book.title;
  div.appendChild(h3);
  let h4 = document.createElement("h4");
  h4.setAttribute("id", "author");
  h4.textContent = book.author;
  div.appendChild(h4);
  let pLength = document.createElement("p");
  pLength.setAttribute("id", "length");
  pLength.textContent = book.length;
  div.appendChild(pLength);
  let pStatus = document.createElement("p");
  pStatus.setAttribute("id", "status");
  pStatus.textContent = book.status;
  div.appendChild(pStatus);
})