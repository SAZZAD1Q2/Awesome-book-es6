
import { MyBookList } from './modules/scritp.js';

import { DateTime } from './modules/luxon.js';


const updateTime = () => {
  const now = DateTime.now();
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  const date = now.toLocaleString(options);
  const time = now.toLocaleString(DateTime.TIME_WITH_SECONDS);
  document.getElementById('datetime').innerHTML = `${date} , ${time}`;
};

setInterval(updateTime, 1000);





// const today = DateTime.now();
// domElement.time.innerText = today.toLocaleString(DateTime.DATE_HUGE);

// domElement.timeSection.appendChild(domElement.time);

// Import the getCurrentDateTime and formatDateTime functions from the luxon-utils.js file
// import { getCurrentDateTime, formatDateTime } from './luxon-utils.js';





// const dateTime = document.querySelector('.dateTime');
// const now = luxon.DateTime.now();
// const timeFormate = dateTime.innerHTML=  now.toLocaleString(luxon.DateTime.DATETIME_FULL);


const list = document.querySelector('.list');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact');
const bookSection = document.querySelector('.book-section');
const formContainer = document.querySelector('.form-container');
const contactSection = document.querySelector('.cantact-section');

list.addEventListener('click', () => {
  bookSection.style.display = 'block';
  formContainer.style.display = 'none';
  contactSection.style.display = 'none';
});

addNew.addEventListener('click', () => {
  bookSection.style.display = 'none';
  formContainer.style.display = 'block';
  contactSection.style.display = 'none';
});

contact.addEventListener('click', () => {
  bookSection.style.display = 'none';
  formContainer.style.display = 'none';
  contactSection.style.display = 'block';
});


const myBookList = new MyBookList();
myBookList();


