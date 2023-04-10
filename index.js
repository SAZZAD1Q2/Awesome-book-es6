import dateTime from './modules/dateTime.js';
import myNavigator from './modules/navigator.js';
import MyBookList from './modules/bookList.js';

myNavigator();
dateTime();

const bookList = new MyBookList();
bookList();
