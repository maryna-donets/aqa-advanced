import Book from './Book.js';
import EBook from './EBook.js';

const book1 = new Book ("Lord of The Rings", "Tolkien", 1978);
const book2 = new Book ("The night in Lisbon", "Remarque", 1962);
const ebook1 = new EBook ("The silent patient", "Michaelides", 2019, "pdf");
book1.printInfo();
book2.printInfo();
ebook1.printInfo();

book1.author = "J.F. Tolkien";
console.log(book1.author);
ebook1.fileFormat = "txt";
console.log(ebook1.fileFormat);

const arr = [book1, book2, ebook1];
Book.bookArr(arr);

ebook1.year = 1950;
Book.bookArr(arr);

const book3 = new Book ("Testing", "Smart Dude", 2018);
const ebook3 = EBook.toEbook(book3, "pdf");
console.log(ebook3)