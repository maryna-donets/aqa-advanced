import chalk from 'chalk';

const book = {
    title: "JS basics",
    author: "M. Donets",
    year: 2025
}
const {title, author} = book;
console.log(chalk.blue(title));
console.log(author);