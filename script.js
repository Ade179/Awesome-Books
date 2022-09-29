/* eslint-disable no-use-before-define */
class Book {
  constructor(title, author) {
    this.title = title
    this.author = author
  }
  //Update the user interface
  updateUI() {
    bookAdd.innerHTML = '';
    bookslist.forEach((data, index) => {
      const classBook = document.createElement('div');
      classBook.classList.add('class-book');
      const par = document.createElement('p');
      par.textContent = `${data.title} By ${data.author}`;
      const btnRemove = document.createElement('button');
      btnRemove.textContent = 'Remove';
      classBook.appendChild(par);
      classBook.appendChild(btnRemove);
      bookAdd.appendChild(classBook);
    });
  }
}

const bookAdd = document.querySelector('.list')

//create bookslist array
const bookslist = []
console.log(bookslist)



// add event to submit button

const formSumbit = document.querySelector('.form');
formSumbit.addEventListener('submit', function (e) {

  //prevet default submit action
  e.preventDefault()

  //attach the form inputs
  const titleinput = document.querySelector('.title').value;
  const authorinput = document.querySelector('.author').value;

  const books = new Book(titleinput, authorinput)
  bookslist.push(books)



}) 