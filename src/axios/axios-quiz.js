import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-52a9e.firebaseio.com/'
})