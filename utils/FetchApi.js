import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "b35f0c21e5msh773b5bf25d7502fp18f38ajsn8d0f2c36c3a1",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchApi = async (url) => {
  const response = await axios.get(`${BASE_URL}/${url}`, options);

  return response.data;
};
