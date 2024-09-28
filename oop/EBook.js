import Book from "./Book.js";

class EBook extends Book {
	constructor(title, author, year, fileFormat) {
		super(title, author, year);
		this._fileFormat = fileFormat;
	}
	printInfo() {
		console.log(`Title: ${this.title}`);
		console.log(`Author: ${this.author}`);
		console.log(`Year: ${this.year}`);
		console.log(`File format: ${this.fileFormat}`);
	}
	get title() {
		return this._title;
	}
	get author() {
		return this._author;
	}
	get year() {
		return this._year;
	}
	get fileFormat() {
		return this._fileFormat;
	}
	set title(title) {
		if (title.length <= 1) {throw new Error("Incorrect title");}
		this._title = title;
	}
	set author(author) {
		if (author.length <= 1) {throw new Error("Incorrect author");}
		this._author = author;
	}
	set year(year) {
		if (year <= 0) {throw new Error("Incorrect year");}
		this._year = year;
	}
	set fileFormat(fileFormat) {
		if (fileFormat.length !== 3) {throw new Error("Incorrect file format");}
		this._fileFormat = fileFormat;
	}
	static toEbook(book, fileFormat) {
		return new EBook(book.title, book.author, book.year, fileFormat);
	}
}
export default EBook;
