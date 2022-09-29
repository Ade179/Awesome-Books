/* eslint-disable no-use-before-define */
 class Book {
  constructor ( title, author) {
    this.title = title
    this.author =author
  }
 }

 //create bookslist array
 const bookslist = []
console.log(bookslist)

//Update the user interface





 // add event to submit button

const formSumbit = document.querySelector('.form');
formSumbit.addEventListener('submit', function (e){

  //prevet default submit action
   e.preventDefault()

  //attach the form inputs
  const titleinput = document.querySelector('.title').value;
  const authorinput = document.querySelector('.author').value;

  const books = new Book (titleinput, authorinput)
  bookslist.push(books)
  


}) 