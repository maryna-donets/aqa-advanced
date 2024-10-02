const axios = require("axios");
const {faker} = require('@faker-js/faker')

const postFake = faker.internet.email();

const baseUrl = "https://jsonplaceholder.typicode.com";

async function getUser() {
	return axios.get(`${baseUrl}/posts/${postFake}`, {
		validateStatus: function (status) {
			return status < 500;
		},
	});
}

test("get getUser", async () => {
	const response = await getUser();
	expect(response.status).toEqual(404);
	expect(response.statusText).toContain("Not Found");
});
