export const API_IMAGE = {
  little: "https://image.tmdb.org/t/p/w154",
  small: "https://image.tmdb.org/t/p/w185/",
  medium: "https://image.tmdb.org/t/p/w300/",
  mediumReserve: "https://cdn.browshot.com/static/images/not-found.png",
  large: "https://image.tmdb.org/t/p/w500/",
  original: "https://image.tmdb.org/t/p/original/",
};

export const VIDEO_EMBED_BASE = "https://www.youtube.com/embed/";

export const MOVIE_TYPE = "movie";
export const TV_TYPE = "tv";
export const DEFAULT_TRENDING_PAGE = 1;
export const WEEK_PERIOD = "week";
export const DAY_PERIOD = "day";

export const TRENDING_PAGE_PERIODS = [
  { label: "Week", tabPeriod: "week" },
  { label: "Day", tabPeriod: "day" },
];

export const TRENDING_PAGE_TABS = [
  { label: "Movies", tabSlug: "movie" },
  { label: "Tvs", tabSlug: "tv" },
  { label: "People", tabSlug: "person" },
];

export const sliderSettings = {
  multipleItems: {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          dots: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  },
  singleItem: {
    dots: false,
    infinite: true,
    speed: 700,
    lazyLoad: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  },
};
