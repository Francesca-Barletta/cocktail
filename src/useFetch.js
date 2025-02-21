import {useState, useEffect} from 'react';
import axios from 'axios';
const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
const singleUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";

const useFetch = (query, type = false) => {
    const url = type ? singleUrl : searchUrl;
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        (async (query) => {
            setIsError(false)
            setIsLoading(true)
            try {
                const response = await axios.get(`${url}${query}`)
                console.log(response)
                setData(response.data)
                setCount(response.data.drinks.length)
            } catch (error) {
                setIsError(true);
                setCount(0);
            }
            setIsLoading(false)
        })(query)
    },[query, url])
  return {isLoading, data, isError, count};

}

export default useFetch