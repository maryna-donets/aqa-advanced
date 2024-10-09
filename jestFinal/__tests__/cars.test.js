const { CarsController } = require("../src/CarsController");
const carSetup = require("../setup");
const carsController = new CarsController();

describe("Cars API", () => {
	beforeAll(async () => {
		await carsController.login();
	});

	afterAll(async () => {
		for (const id of newCarsCreated) {
			const res = await carsController.deleteCar(id);
		}
	});

	let newCarsCreated = [];

	test("Get all cars", async () => {
		const carsResponse = await carsController.getCars();
		expect(carsResponse.status).toBe(200);
	});

	carSetup.forEach((testCase) => {
		test("Create a car", async () => {
			const carsResponse = await carsController.getCars();
			const cars = [...carsResponse.data.data];
			const newCarResponse = await carsController.createCar(
				testCase.carBrandId,
				testCase.carModelId,
				testCase.mileage,
			);
			newCarsCreated.push(newCarResponse.data.data.id);
			const carsResponse2 = await carsController.getCars();
			const newCarList = [...carsResponse2.data.data];
			expect(newCarList.length).toBe(cars.length + 1);
			expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined();
			expect(newCarResponse.data.data.mileage).toBe(testCase.mileage);
		});
	});

	test("Invalid carBrandId (0)", async () => {
		const newCarResponse = await carsController.createCar(0, 1, 50);
		expect(newCarResponse.status).toBe(404);
	});

	test("Invalid carModelId (null)", async () => {
		const newCarResponse = await carsController.createCar(1, null, 50);
		expect(newCarResponse.status).toBe(400);
	});

	test("Invalid carModelId (10)", async () => {
		const newCarResponse = await carsController.createCar(1, 10, 50);
		expect(newCarResponse.status).toBe(404);
	});
});
