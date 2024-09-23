class Book {
	constructor(title, author, year) {
		this._title = title;
		this._author = author;
		this._year = year;
	}

	printInfo() {
		console.log(`Title: ${this.title}`);
		console.log(`Author: ${this.author}`);
		console.log(`Year: ${this.year}`);
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
	static bookArr(arr) {
		const oldestBook = arr.sort(function (a, b) {
			return a.year - b.year;
		});
		console.log(oldestBook[0]);
	}
}
export default Book;
