import axios from 'axios';

const ajax =axios.create({
    baseURL:'http://jsonplaceholder.typicode.com'
})

export default ()=>{
    return ajax.get('/posts')
}