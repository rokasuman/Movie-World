import axios from "axios";


const apiKey = import.meta.env.VITE_APIKEY;
const apiEP = `http://www.omdbapi.com/?apikey=${apiKey}&`;

export const fetchFromAPI = async (str) => {
  try {
    const url = apiEP + "t=" + str ;
    const response = await axios.get(url);
    console.log(response); 
  } catch (error) {
    console.error("API fetch error:", error.message);
  }
};


