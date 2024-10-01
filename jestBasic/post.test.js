const { axiosInstance, writeRequestsToFile, writeResponsesToFile } = require("./instance.js");

afterEach(async () => {
	await writeRequestsToFile();
	await writeResponsesToFile();
});

describe("posts", () => {
	test("get a post", async () => {
		const response = await axiosInstance.get("/posts/4");
		console.log(response.data);
		expect(response.status).toEqual(200);
		expect(response.data.id).toEqual(4);
		expect(Object.keys(response.data)).toHaveLength(4);
	});

	test("add a post", async () => {
		const response = await axiosInstance.post("/posts", {
			title: "testMaryna",
			body: "testMaryna testMaryna",
			userId: 2,
		});
		console.log(response.data);
		expect(response.status).toEqual(201);
		expect(response.data.id).toEqual(101);
		expect(Object.keys(response.data)).toHaveLength(4);
	});

	test("get posts", async () => {
		const response = await axiosInstance.get("/posts");
		console.log(response.data);
		expect(response.status).toEqual(200);
		expect(Object(response.data)).toHaveLength(100);
	});
});

describe("comments", () => {
	test("get post's comments", async () => {
		const postid = 10;
		const response = await axiosInstance.get(`/posts/${postid}/comments`);
		console.log(response.data);
		expect(response.status).toEqual(200);
		expect(Array.isArray(response.data)).toBe(true);
		expect(Object(response.data)).toHaveLength(5);
		response.data.forEach((comment) => {
			expect(comment.postId).toEqual(parseInt(postid));
		});
	});

	test("get comments for the post", async () => {
		const postid = 40;
		const response = await axiosInstance.get(`/comments?postId=${postid}`);
		console.log(response.data);
		expect(response.status).toEqual(200);
		expect(Array.isArray(response.data)).toBe(true);
		expect(Object(response.data)).toHaveLength(5);
		response.data.forEach((comment) => {
			expect(comment.postId).toEqual(parseInt(postid));
		});
		response.data.forEach(() => {
			expect(Object.keys(response.data)).toHaveLength(5);
		});
		const commentIds = response.data.map((comment) => comment.id);
		expect(commentIds).toEqual(expect.arrayContaining([196, 197, 198, 199, 200]));
	});
});
