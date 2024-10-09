const axios = require("axios");
const { BaseController } = require("./BaseController");

class CarsController extends BaseController {
	constructor() {
		super();
		this.apiCars = "/cars";
		this.apiCarsId = "/cars/{id}";
	}

	async getCars() {
		return this.get(this.apiCars);
	}

	async createCar(carBrandId, carModelId, mileage) {
		return this.post(this.apiCars, {
			carBrandId,
			carModelId,
			mileage,
		});
	}

	async deleteCar(id) {
		return this.delete(this.apiCarsId.replace("{id}", id));
	}
}

module.exports.CarsController = CarsController;
