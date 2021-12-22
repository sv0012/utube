import axios from 'axios';

const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyCRmy5AoHkbLBElUBu-3wgcl0jGlfLFRlo',
   },
})

export default request;