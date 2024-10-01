const axios = require("axios");
const fs = require("fs").promises;

const axiosInstance = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
	headers: {
		"Content-Type": "application/json",
	},
});

let requestsLog = [];
let responseLog = [];

axiosInstance.interceptors.request.use((request) => {
	requestsLog.push(request);
	return request;
});
axiosInstance.interceptors.response.use((response) => {
	responseLog.push(response.data);
	return response;
});

const writeRequestsToFile = async () => {
	await fs.writeFile("jestBasic/postsReq.json", JSON.stringify(requestsLog, null, 2));
};
const writeResponsesToFile = async () => {
	await fs.writeFile("jestBasic/postsResp.json", JSON.stringify(responseLog, null, 2));
};

module.exports = {
	axiosInstance,
	writeRequestsToFile,
	writeResponsesToFile,
};
