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

addBookToLibrary("The Stranger", "Albert Camus", "159 pages", "read", "assets/The-Stranger.jpg", crypto.randomUUID());
addBookToLibrary("Moby-Dick", "Herman Melville", "635 pages", "not read", "assets/Moby-Dick_FE_title_page.jpg", crypto.randomUUID());
addBookToLibrary("Don Quixote", "Miguel de Cervantes", "1072 pages", "not read", "assets/don-quixote.jpg", crypto.randomUUID());

myLibrary.forEach (book => {
  let div = document.createElement("div");
  div.classList.add("card");
  div.setAttribute("data-uniqueId", book.id);
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
  let pLength = document.createElement("span");
  pLength.setAttribute("id", "length");
  pLength.textContent = book.length;
  div.appendChild(pLength);
  let pStatus = document.createElement("details");
  let pDetails = document.createElement("p");
  let summary = document.createElement("summary");
  summary.textContent = book.status;
  pStatus.setAttribute("id", "status");
  if (summary.textContent === "read") {
    pDetails.textContent = "not read"
  } else {
    pDetails.textContent = "read"
  }
  div.appendChild(pStatus);
  pStatus.appendChild(pDetails);
  pStatus.appendChild(summary);
  let del = document.createElement("button");
  del.setAttribute("id", "delete-button");
  div.appendChild(del);
})

const addBook = document.getElementById("add-book");
const bookForm = document.getElementById("book-form");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const author = document.getElementById("author");
const length = document.getElementById("length");
const form = document.querySelector("form");
const addBookAlt = document.querySelector(".new-card");
const cancel = document.querySelector("#cancel");

function showStatus() {
  const bookStatus = document.querySelector('input[name="status"]:checked').value;
  return bookStatus;
}

addBook.addEventListener ("click", () => {
  bookForm.showModal();
});

addBookAlt.addEventListener ("click", () => {
  bookForm.showModal();
});

cancel.addEventListener ("click", () => {
  event.preventDefault();
  bookForm.close();
});

form.addEventListener ("submit", (e) => {
  addBookToLibrary(title.value, author.value, length.value, showStatus(), cover.value, id = crypto.randomUUID());
  let div = document.createElement("div");
  div.classList.add("card");
  div.setAttribute("data-uniqueId", id);
  document.querySelector(".main").appendChild(div);
  let img = document.createElement("img");
  if (cover.value === '') {
  img.src = 'assets/book-cover-placeholder-hd.png';
  } else { img.src = cover.value };
  div.appendChild(img);
  let h3 = document.createElement("h3");
  h3.setAttribute("id", "title");
  h3.textContent = title.value;
  div.appendChild(h3);
  let h4 = document.createElement("h4");
  h4.setAttribute("id", "author");
  h4.textContent = author.value;
  div.appendChild(h4);
  let pLength = document.createElement("p");
  pLength.setAttribute("id", "length");
  pLength.textContent = length.value;
  div.appendChild(pLength);
  let pStatus = document.createElement("p");
  pStatus.setAttribute("id", "status");
  if (document.getElementById('read').checked) {
    pStatus.textContent = "read";
  } else {
    pStatus.textContent = "not read"
  };
  div.appendChild(pStatus);
  let del = document.createElement("button");
  del.setAttribute("id", "delete-button");
  div.appendChild(del);
  event.preventDefault();
  bookForm.close();
  form.reset();
  console.log(myLibrary);
});

const main = document.querySelector(".main");

main.addEventListener("click", (e) => {
  let target = e.target;
  console.log(target);
  if (target.tagName != "BUTTON") return;
  else  {
    let cardTarget = e.target.closest(".card");
    console.log(cardTarget);
    let bookErase = myLibrary.findIndex(object => {
      return object.id === cardTarget.dataset.uniqueid;
    });
    console.log(bookErase);
    myLibrary.splice(bookErase, 1);
    cardTarget.remove();
    }
  });

main.addEventListener("click", (e) => {
  let target = e.target;
  console.log(target);
  if (target.tagName != "P") return;
  else  {
    let cardTarget = e.target.closest(".card");
    console.log(cardTarget);
    if (cardTarget.querySelector("summary").textContent === "read") {
      cardTarget.querySelector("summary").textContent = "not read";
      cardTarget.querySelector("p").textContent = "read";
    } else {
      cardTarget.querySelector("summary").textContent = "read";
      cardTarget.querySelector("p").textContent = "not read";
    }
    //let read = myLibrary.findIndex(object => {
      //return object.id === cardTarget.dataset.uniqueid;
    //});
    }
  });