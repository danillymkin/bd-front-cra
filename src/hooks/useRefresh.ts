import { useTypedDispatch } from './useTypedDispatch';
import { useTypedSelector } from './useTypedSelector';
import { useEffectOnce, useUpdateEffect } from 'usehooks-ts';
import { clearAuthState, refresh } from '../store/auth/authSlice';
import { useState } from 'react';

export const useRefresh = () => {
  const dispatch = useTypedDispatch();
  const { error } = useTypedSelector(state => state.auth);
  const [isRefreshed, setIsRefreshed] = useState<boolean>(false);

  useEffectOnce(() => {
    setIsRefreshed(true);
    dispatch(refresh());
  });

  useUpdateEffect(() => {
    if (error && isRefreshed) {
      dispatch(clearAuthState());
      setIsRefreshed(false);
    }
  }, [error]);
};