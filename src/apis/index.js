import axios from 'axios'

const base = axios.create({
  baseURL: 'http://localhost:4000'
});

export function getMovieDetails(id) {
  return base.get('/movie/' + id)
    .then(res => res)
    .catch(e => { console.log(e) });
}

export function getConfig() {
  return base.get('/getConfig')
    .then(res => res)
    .catch(e => { console.log(e) });
}

export function searchMovies(name) {
  return base.get('/search/' + name)
    .then(res => res)
    .catch(e => { console.log(e) });
}

export function searchSimilarMovies(id) {
  return base.get('/similarMovie/' + id)
    .then(res => res)
    .catch(e => { console.log(e) });
}
