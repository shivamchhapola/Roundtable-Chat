import axios from 'axios';

export const getUserProfile = async () => {
  return await axios
    .get(`${import.meta.env.VITE_BACKEND}/api/user/getmyprofile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
