import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID LAWzVoAKnZcxrLdxqpBfOfS0JBkClmh5Us119RLEBFU'
  }
});

