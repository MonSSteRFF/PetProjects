import axios from "axios";

const getHoursApi = () => axios.get('http://b24-owlbot.testers-site.ru/event/')
  .then((res) => res.data);

const getBirthdayApi = () => axios.get('http://dashboard-api.testers-site.ru/bx/near-birthdays')
  .then((res) => res.data);

const getTempcoApi = () => axios.get('http://dashboard-api.testers-site.ru/co2/last')
  .then((res) => res.data);

export { getHoursApi, getBirthdayApi, getTempcoApi }