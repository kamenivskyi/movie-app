import axios from "axios";
import { API_IMAGE } from "../utils/config";
class MovieService {
  _apiKey = "f58b7aed07949c396b8a76edb193b481";
  _apiImageBase = "https://image.tmdb.org/t/p/w500";
  _year = `&primary_release_year=`;
  _sort = "&sort_by=";

  getResource = async (url) => {
    const res = await axios
      .create({ baseURL: "https://api.themoviedb.org/3" })
      .get(url);
    return res.data;
  };

  getMediaById = async (id, type) => {
    const res = await this.getResource(
      `/${type}/${id}?api_key=${this._apiKey}&language=en-US`
    );
    return res;
  };

  getCastByType = async (id, type) => {
    const res = await this.getResource(
      `/${type}/${id}/credits?api_key=${this._apiKey}`
    );
    return res.cast;
  };

  getPersonById = async (id) => {
    const res = await this.getResource(
      `/person/${id}?api_key=${this._apiKey}&language=en-US`
    );
    return res;
  };
  getPersonPhotoById = async (id) => {
    const res = await this.getResource(
      `/person/${id}/images?api_key=${this._apiKey}`
    );
    return res.profiles;
  };

  getGenreMoviesById = async (id) => {
    const res = await this.getResource(
      `/discover/movie?api_key=${this._apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
    );
    return res.results;
  };

  getDiscoverMovies = async (activePage, sortBy, isAdult, year) => {
    const hasSort = sortBy ? this._sort + sortBy : "";
    const hasYear = year ? this._year + year : "";

    const res = await this.getResource(
      `/discover/movie?api_key=${this._apiKey}&language=en-US${hasSort}&include_adult=${isAdult}&vote_count.gte=1000&include_video=true&page=${activePage}${hasYear}`
    );

    return res;
  };

  getTrendingMedia = async (type = "movie", period = "week", page = 1) => {
    const res = await this.getResource(
      `/trending/${type}/${period}?api_key=${this._apiKey}&page=${page}`
    );
    return res;
  };

  getGenreList = async () => {
    const res = await this.getResource(
      `/genre/movie/list?api_key=${this._apiKey}&language=en-US`
    );
    return res.genres;
  };
  getVideo = async (id, type) => {
    const res = await this.getResource(
      `/${type}/${id}/videos?api_key=${this._apiKey}&language=en-US`
    );
    return res.results[0];
  };

  search = async (name, activePage = 1) => {
    const res = await this.getResource(
      `/search/movie?api_key=${this._apiKey}&language=en-US&query=${name}&include_adult=false&page=${activePage}`
    );
    return res;
  };
  getPopularPeople = async () => {
    const res = await this.getResource(
      `/person/popular?api_key=${this._apiKey}&language=en-US&page=1`
    );
    return res.results;
  };

  getPersonPhotoUrl = (filePath) => `${API_IMAGE.medium}${filePath}`;

  _transformMovieBase = (obj) => {
    return {
      title: obj.title,
      id: obj.id,
      posterPath: obj.poster_path,
      backdropPath: obj.backdrop_path,
      overview: obj.overview,
      genres: obj.genres,
      budget: obj.budget,
      revenue: obj.revenue,
    };
  };
}
export default MovieService;
