/* eslint-disable no-use-before-define */

const title = document.querySelector('.title'); //title input
const author = document.querySelector('.author'); //author input
const form = document.querySelector('.form'); //form
const bookAdd = document.querySelector('.list'); 
let books = [];


function updateUI() {
  bookAdd.innerHTML = '';
  books.forEach((data, index) => {
    const classBook = document.createElement('div');
    classBook.classList.add('class-book');
    const par = document.createElement('p');
    par.textContent = `${data.title} By ${data.author}`;
    const btnRemove = document.createElement('button');
    btnRemove.textContent = 'Remove';
    btnRemove.addEventListener('click', removeBook.bind(index));
    classBook.appendChild(par);
    classBook.appendChild(btnRemove);
    bookAdd.appendChild(classBook);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (title.value && author.value) {
    const obj = { title: title.value, author: author.value };
    books.push(obj);
    saveBooks(books);
    displayBookData();
    title.value = '';
    author.value = '';
  }
});

function saveBooks(book) {
    localStorage.setItem('bookInfo', JSON.stringify(book));
  }
if (!localStorage.getItem('bookInfo')) {
  localStorage.setItem('bookInfo', JSON.stringify([]));
}

  function displayBookData() {
    books = JSON.parse(localStorage.getItem('bookInfo'));
    updateUI();
  }
  function removeBook() {
    books.splice(this, 1);
    saveBooks(books);
    displayBookData();
  }

displayBookData();
