import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1'
interface Todo {
    id:number;
    title:string;
    completed:true;
}
axios.get(url).then(response =>{
    const todo = response.data as Todo;
    const id = todo.id;
    const title =todo.title;
    const finished = todo.completed;
    console.log(`it has id ${id}, with a title ${title} and finished ${finished}`)
})

 