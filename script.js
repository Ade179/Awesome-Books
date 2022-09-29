/* eslint-disable no-use-before-define */
const bookAdd = document.querySelector('.list');
class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
    this.books = [];
  }

  addBook(title, author) {
    const id = this.books.length + 1;
    const book = new Book(title, author, id);
    this.books.push(book);
    this.#save();
  }

  #addBooks(books) {
    books.forEach((book) => {
      this.addBook(book.title, book.author);
    });
  }

  #save() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  getBooks() {
    return this.books;
  }

  load() {
    const books = JSON.parse(localStorage.getItem('books'));
    if (books) {
      this.#addBooks(books);
    }
  }

  deleteBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
    this.#save();
  }
}
const awesomeBooks = new Book();
awesomeBooks.load();
function updateUI() {
  bookAdd.innerHTML = awesomeBooks.getBooks().map((book) => `
              <li class="container">
                  <p class="class-book">"${book.title}" by ${book.author}</p>
                  <button data-id=${book.id} class="remove">Remove</button>
              </li>
             
          `).join('');
}

updateUI();

// display error
function removeError() {
  const error = document.querySelector('.error');
  error.style.display = 'none';
}

const formSumbit = document.querySelector('.form');

formSumbit.addEventListener('submit', (e) => {
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;
  e.preventDefault();
  if (title && author) {
    awesomeBooks.addBook(title, author);
    this.reset();
    updateUI();
  } else {
    const error = document.querySelector('.error');
    error.style.color = 'red';
    error.textContent = '*Enter a valid title/author';
    setTimeout(removeError, 3000);
  }
});

bookAdd.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove')) {
    const { id } = event.target.dataset;
    awesomeBooks.deleteBook(+id);
  }
  updateUI();
});
