import axios from 'axios';

export default axios.create({
    baseURL: 'https://omdbapi.com/?apikey=144de458&'
});
