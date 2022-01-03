// La intencion de este custom hook es ser reutilizable en otras aplicaciones

import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (dataUrl) => {
  const [data, setData] = useState([]); // Fetched Data storage
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true; // Start on true 
    const source = axios.CancelToken.source(); // axios cancel token

    const fetchData = async (url) => {
      setIsLoading(true); // Loading pre API request
      try {
        const response = await axios.get(url, {
          cancelToken: source.token // Cancel on unmount component as second arg
        });
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setData([]);
        }
      // } finally {
      //   isMounted && setTimeout(() => setIsLoading(false), 2000); // Loading sim
      // }

      } finally {
        isMounted && setIsLoading(false); // Loading completed
      }
    };

    fetchData(dataUrl);

    // Cancel request if component is unloaded during that request
    const cleanUp = () => {
      isMounted = false;
      source.cancel(); 
    }

    return cleanUp;

  }, [dataUrl]); // Dependency: desde el custom hook

  return { data, fetchError, isLoading };
}

export default useAxiosFetch;