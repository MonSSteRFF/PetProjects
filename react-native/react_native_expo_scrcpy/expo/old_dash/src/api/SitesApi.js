import axios from "axios";


export const getSites = () => axios.get('http://dashboard-api.testers-site.ru/lifetime')
  .then( (res) => res.data );