import React, { useEffect } from 'react';
import Mobile from './main.mobile';
import Desktop from './main.desktop';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../utils/user';
import { changeGroups, changeUserData } from '../../slices/userSlice';
import { getGroupList } from '../../utils/group';
import { changeSelectedGroup } from '../../slices/groupSlice';

export default function main() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const groupList = useSelector((state) => state.user.groups);
  const setUserData = async () => {
    await getUserProfile().then((data) => {
      dispatch(changeUserData(data));
    });
  };
  const setGroupListData = async () => {
    await getGroupList().then((data) => {
      if (data) {
        dispatch(changeSelectedGroup(data[0]));
        dispatch(changeGroups(data));
      }
    });
  };
  useEffect(() => {
    if (!user.id) {
      setUserData();
    }
    if (groupList.length < 1) {
      setGroupListData();
    }
  }, []);
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
}
