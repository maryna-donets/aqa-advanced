async function fetchTodo() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const todo = await response.json();
    console.log(todo)
    return todo;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}
fetchTodo();

async function fetchUser() {
    try{
        const response2 = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response2.ok) {
      throw new Error('Request failed');
    }
    const user = await response2.json();
    console.log(user)
    return user;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}
fetchUser();

(async() => {
    try{
        const[todo, user] = await Promise.all([fetchTodo(), fetchUser()]) 
        console.log('Todo:', todo);
        console.log('User:', user);
    }
    catch(error){
        console.error('Error:', error);
    };
})();


(async() => {
    try{
        const x = await Promise.race([fetchTodo(), fetchUser()]) 
        console.log('First response:', x);
    }
    catch(error){
        console.error('Error:', error);
    };
})();