import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, userLoad, userUnload } from 'state/user/slice';
import { IUser } from 'utils/types/db';
import { details } from 'utils/user/details';

/**
 * useUser
 * @return {IUser}
 */
export default function useUser() {
  const userData = useSelector(selectUser);

  const [user, setUser] = useState<IUser | null>(userData);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVerified, setIsVeryfied] = useState(false);

  useEffect(() => {
    if (user && user.auth_code) {
      setIsLoggedIn(true);
      if (user.ver_status === 'verified') {
        setIsVeryfied(true);
      } else {
        setIsVeryfied(false);
      }
    } else {
      setIsLoggedIn(false);
      setIsVeryfied(false);
    }
  }, [user]);

  const dispatch = useDispatch();

  const loadUser = (userData: any) => {
    dispatch(userLoad(userData));
    setUser(userData);

    // get user details
    if (userData && userData.auth_code) {
      details({ auth_code: userData.auth_code })
        .then(({ data, status }) => {
          if (status) {
            const localData = JSON.parse(data);
            if (localData.length > 0) {
              console.info('USER DETAILS', localData[0]);
              dispatch(userLoad({ ...userData, ...localData[0] }));
              setUser({ ...userData, ...localData[0] });
            }
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const unloadUser = () => {
    dispatch(userUnload());
    setUser(null);
  };

  return {
    user,
    isLoggedIn,
    isVerified,
    loadUser,
    unloadUser,
  };
}
