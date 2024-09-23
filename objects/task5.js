const users = [
	{ name: "John", email: "johndoe@gmail.com", age: 30 },
	{ name: "Jane", email: "janedoe@gmail.com", age: 25 },
	{ name: "Mike", email: "mike@gmail.com", age: 40 },
];

for (const { name, email } of users) {
	console.log(`${name}'s email - ${email}.`);
}
