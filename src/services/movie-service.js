import axios from 'axios';

class MovieService {
  _apiKey = 'f58b7aed07949c396b8a76edb193b481';
  _cors = 'https://cors-anywhere.herokuapp.com/';
  _apiBase = 'https://api.themoviedb.org/3';
  _apiImageBase = 'https://image.tmdb.org/t/p/w500';

  getResource = async url => {
    const res = await axios.get(`${this._apiBase}${url}`);
    console.log(res.data);
    return res.data;
  };
  getMovie = async id => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f58b7aed07949c396b8a76edb193b481&language=en-US`
    );
    return res.data;
  };
  getDiscoverMovies = () => {
    return this.getResource(
      `/discover/movie?api_key=${this._apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    );
  };
  getTrendingMovies = () => {
    return this.getResource(`/trending/all/week?api_key=${this._apiKey}`);
  };
  getGenres = async () => {
    const res = await this.getResource(
      `/genre/movie/list?api_key=${this._apiKey}&language=en-US`
    );
    return res.genres;
  };
  searchMovies = value => {
    return this.getResource(
      `/search/movie?api_key=${this._apiKey}&language=en-US&query=${value}&page=1&include_adult=true`
    );
  };
}
export default MovieService;
