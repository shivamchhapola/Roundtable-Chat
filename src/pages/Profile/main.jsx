import React, { useEffect, useState } from 'react';
import Mobile from './main.mobile';
import Desktop from './main.desktop';
import axios from 'axios';

export default function main() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const getProfile = async () => {
      await axios
        .get(`${import.meta.env.VITE_BACKEND}/api/user/getmyprofile`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          },
        })
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProfile();
  }, []);

  return (
    <>
      <Desktop profileData={profile} setProfile={setProfile} />
      <Mobile />
    </>
  );
}
