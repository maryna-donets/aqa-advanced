function fetchTodo() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response =>  {return response.json()}  )
            .then(todo => {
                console.log(todo)
                resolve(todo);
            })
            .catch(error => {
                reject(console.log(error));
            });
    });
}

function fetchUser() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => {return response.json()}  )
            .then(user => {
                console.log(user)
                resolve(user);
            })
            .catch(error => {
                reject(console.log(error));
            });
    });
}

Promise.all([fetchTodo(), fetchUser()])
    .then(([todo, user]) => {
        const allData = { todo, user };
        console.log('All Data:', allData);
    })
    .catch(error => {
        console.error('Error:', error);
    });

Promise.race([fetchTodo(), fetchUser()])
    .then(x => {
        const data = x;
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Error:', x);
    });