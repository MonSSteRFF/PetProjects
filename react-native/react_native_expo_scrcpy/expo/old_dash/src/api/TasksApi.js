import axios from "axios";


export const getTasks = () => axios.get('http://dashboard-api.testers-site.ru/tasks')
  .then( (res) => res.data );