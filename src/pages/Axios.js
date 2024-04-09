import axios from 'axios';

const Axios= axios.create({
    baseURL: 'https://car-data.p.rapidapi.com/cars',
    headers: {
      'X-RapidAPI-Key': 'bf9c8af640mshb5da8109d930ae4p1cc078jsn151a98fc68a0',
    'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
    },
});

export default Axios;