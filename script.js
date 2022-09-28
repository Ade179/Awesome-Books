/* eslint-disable no-use-before-define */
 class Book {
  constructor ( title, author) {
    this.title = title
    this.author =author
  }
 }

 //class to add a book to the book array
 






 // add event to submit button

const formSumbit = document.querySelector('.form');
formSumbit.addEventListener('submit', function (e){

  //prevet default submit action
   e.preventDefault()

  //attach the form inputs
  const titleinput = document.querySelector('.title').value;
  const authorinput = document.querySelector('.author').value;

  const books = new Book (titleinput, authorinput)
}) 