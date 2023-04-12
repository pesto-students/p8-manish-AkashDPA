const API_BASE = 'http://api.weatherapi.com/v1/';

const cityData = async (name) => {
    const url = buildUrl('current.json', {q: name});
    const data = await fetch(url)
        .then(res => res.json())
    return data;
}

const forecastData =  async (name, days) => {
  const url = buildUrl('forecast.json', {q: name, days: days});
  const data = await fetch(url)
      .then(res => res.json())
  return data;
}

const buildUrl = (endpoint, params) => {
    const url = new URL(API_BASE+''+endpoint);
    params['key'] = process.env.API_KEY;
    url.search = new URLSearchParams(params);
    return url;
}
  