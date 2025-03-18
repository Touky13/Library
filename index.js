const myLibrary = [];

function Book(title, author, length, status, id) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.length = length;
  this.status = status;
  this.id = id;
}

function addBookToLibrary(title, author, length, status, id) {
  // take params, create a book then store it in the array
  let book = new Book(title, author, length, status, id);
  return myLibrary.push(book);
}

addBookToLibrary("test", "John", "32 pages", "read", crypto.randomUUID());
addBookToLibrary("test2", "Marc", "50 pages", "not read", crypto.randomUUID());
addBookToLibrary("test3", "Alice", "74 pages", "read", crypto.randomUUID());
console.log(myLibrary);