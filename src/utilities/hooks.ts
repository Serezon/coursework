import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const useFetching = (someFetchActionCreator: (payload: any) => any, payload: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(someFetchActionCreator(payload));
  }, [])
};
