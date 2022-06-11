import { getCurrenciesService } from "../services";

const getCurrenciesHandler = async (setCurrencies) => {
  try {
    const response = await getCurrenciesService();
    if (response.status === 200) {
      setCurrencies(response.data);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.error(error);
  }
};

export { getCurrenciesHandler };
