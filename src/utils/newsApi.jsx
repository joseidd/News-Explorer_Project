const apiKey = import.meta.env.VITE_API_KEY;

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

const request = (url, options) => {
  return fetch(url, options).then(processServerResponce);
};

const processServerResponce = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

const get7DaysAgo = () => {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  // const date = new Date();
  // // date.setDate(date.getDate() - 7);
  // // return date.toISOString().split("T")[0];
};

const getToday = () => {
  const date = new Date();
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  // return new Date().toISOString().split("T")[0];
};

const parseNewsData = (newsData) => {
  return newsData["articles"];
};

const getNews = async (keyword) => {
  const url = `${baseUrl}?q=${encodeURIComponent(
    keyword
  )}&apiKey=${apiKey}&from=${get7DaysAgo()}&to=${getToday()}&pageSize=100`;

  try {
    const articleObject = await request(url);
    const articles = parseNewsData(articleObject);
    return articles;
  } catch (err) {
    console.log("Error fetching news:", err);
  }
};

export default getNews;
