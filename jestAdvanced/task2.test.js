const axios = require('axios');

const baseUrl = "https://demoqa.com"

async function getUser(isbn) {
	return axios.get(`${baseUrl}/BookStore/v1/Book?ISBN=${isbn}`, {
            headers: {
                'Content-Type': 'application/json'
            }
	});
}

test('get a user', async () => {
    const isbn = "9781449331818"
   const response = await getUser(isbn)
    expect(response.status).toEqual(200),
    expect(response.headers['content-type']).toContain("application/json"),
    expect(response.data.isbn).toEqual(isbn)
})