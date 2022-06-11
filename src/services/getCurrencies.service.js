import axios from "axios";

const getCurrenciesService = () => {
  return axios.get("https://api.coincap.io/v2/assets/?limit:5");
};

export { getCurrenciesService };
