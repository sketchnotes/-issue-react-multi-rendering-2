import { useEffect, useContext } from 'react';
import { CurrentUserContext } from './currentUser';
import useFetch from './useFetch';

const CurrentUserChecker = ({ children }) => {
  const [, dispatch] = useContext(CurrentUserContext);
  const [{ response }, doFetch] = useFetch('/todos');

  console.log('CurrentUserChecker')

  useEffect(() => {
    if (!localStorage.getItem('auth_token')) {
      dispatch({ type: 'SET_UNAUTHORIZED' });
    }
    doFetch();
    dispatch({ type: 'LOADING' });
  }, [doFetch, dispatch]);

  useEffect(() => {
    if (!response) return;
    dispatch({ type: 'SET_AUTHORIZED', payload: response[0] });
  }, [response, dispatch]);

  return children;
};

export default CurrentUserChecker;
