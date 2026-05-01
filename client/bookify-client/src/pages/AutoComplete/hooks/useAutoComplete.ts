import { useState, useEffect } from 'react';

export const useAutoComplete = (query: string) => {
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  console.log('called', query)
  useEffect(() => {
    if (!query.length) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async()=>{
      setIsLoading(true);
      try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/${query}`);
        const jsonData = await data.json();
        setSuggestions(jsonData);
      }catch(err){
        setError(err as string);
      }finally{
        setIsLoading(false)
      }
    },1000)

    return  ()=>clearTimeout(timer)
  }, [query]);

  return {suggestions, isLoading, error}
};
