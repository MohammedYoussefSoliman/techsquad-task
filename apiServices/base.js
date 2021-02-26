import axios from 'axios';

export const apiUrl = axios.create({ baseURL: 'http://80.240.21.204:1337/' });

export const endpoint_news = 'news';