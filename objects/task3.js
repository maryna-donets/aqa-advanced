const car1 = {
	brand: "Toyota",
	model: "C-HR hybrid",
	year: 2022,
};
const car2 = {
	brand: "Subaru",
	model: "Forester",
	owner: "Maryna",
};
const car3 = { ...car1, ...car2 };
console.log(car3);
