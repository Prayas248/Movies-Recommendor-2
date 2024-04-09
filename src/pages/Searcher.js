import axios from 'axios';

const Searc= axios.create({
    
baseURL: 'https://moviesverse1.p.rapidapi.com/movies',
params: {search: ''},
headers: {
  'X-RapidAPI-Key': 'eda55a8d57msh67a4c48941b50bdp19027ajsnbdd5b8d4fe88',
  'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
}
});

export default Searc;


