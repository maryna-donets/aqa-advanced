class Calls {
	async fetchTodo() {
		try {
			const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
			if (!response.ok) {
				throw new Error("Request failed");
			}
			const todo = await response.json();
			return todo;
		} catch (error) {
			console.error("An error occurred:", error);
			throw error;
		}
	}
	async fetchUser() {
		try {
			const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
			if (!response.ok) {
				throw new Error("Request failed");
			}
			const user = await response.json();
			return user;
		} catch (error) {
			console.error("An error occurred:", error);
			throw error;
		}
	}
}

class ApiCall {
	constructor(calls) {
		this.calls = calls;
	}
	async getAll() {
		try {
			const [todo, user] = await Promise.all([this.calls.fetchTodo(), this.calls.fetchUser()]);
			console.log("Todo:", todo);
			console.log("User:", user);
		} catch (error) {
			console.error("Error:", error);
		}
	}

	async getFirst() {
		try {
			const x = await Promise.race([this.calls.fetchTodo(), this.calls.fetchUser()]);
			console.log("First response:", x);
		} catch (error) {
			console.error("Error:", error);
		}
	}
}

const calls = new Calls();
const apiCall = new ApiCall(calls);

apiCall.getAll();
apiCall.getFirst();
