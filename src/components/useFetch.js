import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export default url => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const requestOptions = {
      ...options,
    };

    axios(process.env.REACT_APP_GRAPHQL_URI + url, requestOptions)
      .then(res => {
        setResponse(res.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.response.data);
        setIsLoading(false);
      });
  }, [isLoading, url, options]);

  return [{ isLoading, response, error }, doFetch];
};
