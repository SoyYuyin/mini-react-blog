import { useState, useEffect} from 'react'

const useFetch = (url) =>{ // Custom hooks must start with 'use'

  const [data, setData] = useState(null); // we initially set the state to null to later update fetch the date to the db.json file
  const [isPending, setIsPending] = useState(true); // We initially set the pending to true, meaning it´s loading. Once the fetch method returns date, we´ll use the setIsPending function to set it to false and using conditional formatting we'll hide the loading <p> tag
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data.");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 0);
  }, [url]); // the url needs to be added as a dependency to run if the url changes

  return {data,isPending,error} // the return value can be an array, a string, boolean or whatever
}

export default useFetch