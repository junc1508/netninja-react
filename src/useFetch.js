// this is a hook to grab data from data base
//url example: http://localhost:8000/blogs
//it returns 3 objects: data, isPending state, error

import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => { 
        //solve abort error
        const abortCont = new AbortController();

        // setTimeout is used here to mimic the delay 
        // from accessing remote server to practice debugging. 
        // we do not need it when writing real code
        setTimeout(() => {
            // signal: is to connect fetch to abortcontroller
            fetch(url, { signal: abortCont.signal })
            .then(res => {
                //check the res.ok property and throw an error if not ok 
                if (!res.ok) {
                    throw Error('could not fetch data from the resource');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                // if we are able to fetch data later, need to reset error 
                setError(null);
            })
            // catch connection error and abortError 
            .catch(err => {
                if (err.name === "AbortError") {
                    console.log('fetch aborted')
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
               // so will not show loading when there is error 
            })
        }, 1000);  
        //Return value for fetch
        return () => abortCont.abort();
    }, [url]);
    
    return {data, isPending, error};

}
export default useFetch;