const axios = require('axios');

async function getUser(isbn) {
  const response = await axios.get(`https://demoqa.com/BookStore/v1/Book?ISBN=${isbn}`);
  return response;
}

jest.mock('axios');

test('should get a book', async () => {
  const isbn = "918";
  const mockedResponse = {
    status: 200,
    data: {
      isbn: isbn,
      title: "Some Book",
    },
  };
  axios.get.mockResolvedValue(mockedResponse);
  const result = await getUser(isbn);
  expect(result.status).toEqual(mockedResponse.status);
  expect(result.data).toEqual(mockedResponse.data);
  expect(axios.get).toHaveBeenCalledWith(`https://demoqa.com/BookStore/v1/Book?ISBN=${isbn}`);
});


test('should return 404 for invalid isbn', async () => {
  const isbn = "invalid-isbn";
  axios.get.mockRejectedValue(new Error('Request failed with status code 404'));
  await expect(getUser(isbn)).rejects.toThrow('Request failed with status code 404');
  
});