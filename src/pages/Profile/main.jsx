import React, { useEffect } from 'react';
import Mobile from './main.mobile';
import Desktop from './main.desktop';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUserProfile } from '../../utils/user';
import { changeUserData } from '../../slices/userSlice';

export default function main() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const setUserData = async () => {
    await getUserProfile().then((data) => {
      dispatch(changeUserData(data));
    });
  };
  useEffect(() => {
    if (!user.id) {
      setUserData();
    }
  }, []);

  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
}
