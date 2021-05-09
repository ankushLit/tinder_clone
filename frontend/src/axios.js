import axios from 'axios';

const instance =axios.create({baseURL:'https://personal-tinder-clone-backend.herokuapp.com'});

export default instance;