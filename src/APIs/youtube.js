import axios from 'axios';

const KEY = 'AIzaSyDdzP6bDduhuJJK0iuQ1M3Lgf5Mh1ofsAo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
