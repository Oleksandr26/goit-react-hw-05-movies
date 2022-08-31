const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '42a5b39371cdee67f851a43d6e8fc07d';

export const fetchTrending = async () => {
  const trending = await fetch(`
${BASE_URL}trending/movie/week?api_key=${API_KEY}`);
  if (!trending.ok) {
    throw new Error(trending.status);
  }
  const trendingJson = await trending.json();
  return trendingJson;
};

export const fetchSearch = async (query, page = 1) => {
  const search =
    await fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false
    `);
  if (!search.ok) {
    throw new Error(search.status);
  }
  const searchJson = await search.json();
  return searchJson;
};

export const fetchDetails = async id => {
  const details =
    await fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US
    `);
  if (!details.ok) {
    throw new Error(details.status);
  }
  const detailsJson = await details.json();
  return detailsJson;
};

export const fetchCredits = async id => {
  const credits =
    await fetch(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US
    `);
  if (!credits.ok) {
    throw new Error(credits.status);
  }
  const creditsJson = await credits.json();
  return creditsJson;
};

export const fetchReviews = async id => {
  const reviews =
    await fetch(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1
    `);
  if (!reviews.ok) {
    throw new Error(reviews.status);
  }
  const reviewsJson = await reviews.json();
  return reviewsJson;
};
