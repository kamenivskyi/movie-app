import axios from 'axios';

class MovieService {
  _apiKey = 'f58b7aed07949c396b8a76edb193b481';
  _apiBase = 'https://api.themoviedb.org/3';
  _apiImageBase = 'https://image.tmdb.org/t/p/w500';
  _year = `&primary_release_year=`;
  _sort = '&sort_by=';

  getResource = async url => {
    const res = await axios.get(`${this._apiBase}${url}`);
    return res.data;
  };

  getMovieById = async id => {
    const res = await this.getResource(
      `/movie/${id}?api_key=${this._apiKey}&language=en-US`
    );
    return res;
  };

  getCastById = async id => {
    const res = await this.getResource(
      `/movie/${id}/credits?api_key=${this._apiKey}`
    );
    return res.cast;
  };

  getPersonById = async id => {
    const res = await this.getResource(
      `/person/${id}?api_key=${this._apiKey}&language=en-US`
    );
    return res;
  };
  getPersonPhotoById = async id => {
    const res = await this.getResource(
      `/person/${id}/images?api_key=${this._apiKey}`
    );
    return res.profiles;
  };

  getGenreMoviesById = async id => {
    const res = await this.getResource(
      `/discover/movie?api_key=${this._apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
    );
    return res.results;
  };

  getDiscoverMovies = async (activePage, sortBy, isAdult, year) => {
    const hasSort = sortBy ? this._sort + sortBy : '';
    const hasYear = year ? this._year + year : '';

    const res = await this.getResource(
      `/discover/movie?api_key=${this._apiKey}&language=en-US${hasSort}&include_adult=${isAdult}&vote_count.gte=1000&include_video=true&page=${activePage}${hasYear}`
    );

    return res;
  };

  getTrendingMovies = async () => {
    const res = await this.getResource(
      `/trending/movie/week?api_key=${this._apiKey}`
    );
    return res.results;
  };

  getGenreList = async () => {
    const res = await this.getResource(
      `/genre/movie/list?api_key=${this._apiKey}&language=en-US`
    );
    return res.genres;
  };

  searchMoviesByName = async (name, activePage = 1) => {
    const res = await this.getResource(
      `/search/movie?api_key=${this._apiKey}&language=en-US&query=${name}&page=1&include_adult=true&page=${activePage}`
    );
    return res;
  };
  getPopularPeople = async () => {
    const res = await this.getResource(
      `/person/popular?api_key=${this._apiKey}&language=en-US&page=1`
    );
    return res.results;
  };

  _transformMovieBase = obj => {
    return {
      title: obj.title,
      id: obj.id,
      posterPath: obj.poster_path,
      backdropPath: obj.backdrop_path,
      overview: obj.overview,
      genres: obj.genres,
      budget: obj.budget,
      revenue: obj.revenue
    };
  };
}
export default MovieService;
