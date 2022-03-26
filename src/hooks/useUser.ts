import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, userLoad, userUnload } from 'state/user/slice';
import { IUser } from 'utils/types/db';

/**
 * useUser
 * @return {IUser}
 */
export default function useUser() {
  const userData = useSelector(selectUser);
  const [user, setUser] = useState<IUser | null>(userData);
  const dispatch = useDispatch();

  const loadUser = (userData: any) => {
    dispatch(userLoad(userData));
    setUser(userData);
  };

  const unloadUser = () => {
    dispatch(userUnload());
    setUser(null);
  };

  return {
    user,
    loadUser,
    unloadUser,
  };
}
