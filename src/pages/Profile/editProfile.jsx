import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdUpload } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserData } from '../../slices/userSlice';

export default function EditProfile({ setUpdateError }) {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.user.data);

  const [iProfileData, setIProfileData] = useState({
    username: '',
    name: '',
    bio: '',
    email: '',
    contact: '',
    link: '',
  });
  const [ipic, setIPic] = useState('');
  const [ibanner, setIBanner] = useState('');

  const onPicSelect = (e) => {
    e.preventDefault();
    setIPic(e.target.files[0]);
  };
  const onBannerSelect = (e) => {
    e.preventDefault();
    setIBanner(e.target.files[0]);
  };

  const handleIProfileDataChange = (e) => {
    setIProfileData({ ...iProfileData, [e.target.name]: e.target.value });
  };

  const handleIProfileDataSubmit = async () => {
    reset();
    const profileForm = new FormData();
    for (const key in iProfileData) {
      profileForm.append(key, iProfileData[key]);
    }
    profileForm.append('pic', ipic);
    profileForm.append('banner', ibanner);
    await axios
      .post(
        `${import.meta.env.VITE_BACKEND}/api/user/updateMyProfile`,
        profileForm,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          return dispatch(changeUserData(res.data));
        }
        setUpdateError(res.data);
        return console.log(res.data);
      })
      .catch((err) => {
        setUpdateError(err.response.data);
        return console.log(err);
      });
  };

  const reset = () => {
    setIProfileData(profileData);
    setIBanner('');
    setIPic('');
  };

  useEffect(() => {
    setIProfileData(profileData);
  }, [profileData]);

  return (
    <div>
      <input type="checkbox" id="editProfile" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-h-[85vh] overflow-y-auto scrollbar-hide relative">
          <label
            onClick={reset}
            htmlFor="editProfile"
            className="btn btn-sm btn-circle absolute right-2 top-2 btn-error z-50">
            ✕
          </label>
          <div className="w-full flex flex-col items-center overflow-y-auto scrollbar-hide max-h-[65vh]">
            <div
              name="Banner"
              className="bg-primary w-full min-h-[10rem] rounded-t-[var(--rounded-btn)] overflow-hidden relative">
              {ibanner ? (
                <img
                  src={URL.createObjectURL(ibanner)}
                  className="absolute top-[-9999px] bottom-[-9999px] left-[-9999px] right-[-9999px] m-auto object-fill w-full"
                />
              ) : (
                profileData.banner && (
                  <img
                    src={profileData.banner}
                    className="absolute top-[-9999px] bottom-[-9999px] left-[-9999px] right-[-9999px] m-auto object-fill w-full"
                  />
                )
              )}
              <div className="min-h-[10rem] w-full relative flex justify-center items-center">
                <div className="btn btn-circle bg-gray-800 bg-opacity-30 border-0 text-white hover:bg-gray-700 relative btn-lg">
                  <MdUpload size="2rem" />
                  <input
                    accept="image/png, image/jpeg"
                    onChange={onBannerSelect}
                    type="file"
                    className="w-full h-full absolute opacity-0"
                  />
                </div>
              </div>
            </div>
            <div name="Profile Picture" className="avatar relative bottom-7">
              <div className="w-20 rounded-full bg-white">
                {ipic ? (
                  <img src={URL.createObjectURL(ipic)} />
                ) : (
                  profileData.pic && <img src={profileData.pic} />
                )}
                <div
                  className={`relative ${
                    ipic || profileData.pic ? 'bottom-16' : 'top-4'
                  } flex justify-center items-center`}>
                  <div className="btn btn-circle bg-gray-800 bg-opacity-30 border-0 text-white hover:bg-gray-700">
                    <MdUpload size="2rem" />
                    <input
                      accept="image/png, image/jpeg"
                      onChange={onPicSelect}
                      type="file"
                      className="w-full h-full absolute opacity-0"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[90%] text-center flex flex-col justify-start items-center gap-4">
              <label className="input-group input-group-vertical">
                <span className="text-primary font-semibold bg-opacity-80">
                  Username
                </span>
                <input
                  onChange={(e) => handleIProfileDataChange(e)}
                  name="username"
                  maxLength="20"
                  value={iProfileData.username || ''}
                  className="input input-bordered input-primary w-full bg-primary bg-opacity-5 h-11"
                />
              </label>
              <label className="input-group input-group-vertical">
                <span className="text-primary font-semibold bg-opacity-80">
                  Name
                </span>
                <input
                  onChange={(e) => handleIProfileDataChange(e)}
                  name="name"
                  maxLength="40"
                  value={iProfileData.name || ''}
                  className="input input-bordered input-primary w-full bg-primary bg-opacity-5 h-11"
                />
              </label>
              <label className="input-group input-group-vertical">
                <span className="text-primary font-semibold bg-opacity-80">
                  Bio
                </span>
                <input
                  onChange={(e) => handleIProfileDataChange(e)}
                  name="bio"
                  maxLength="175"
                  value={iProfileData.bio || ''}
                  className="input input-bordered input-primary w-full bg-primary bg-opacity-5 h-11"
                />
              </label>
              <label className="input-group input-group-vertical">
                <span className="text-primary font-semibold bg-opacity-80">
                  Link
                </span>
                <input
                  onChange={(e) => handleIProfileDataChange(e)}
                  name="link"
                  maxLength="250"
                  value={iProfileData.link || ''}
                  className="input input-bordered input-primary w-full bg-primary bg-opacity-5 h-11"
                />
              </label>
              <label className="input-group input-group-vertical">
                <span className="text-primary font-semibold bg-opacity-80">
                  Email
                </span>
                <input
                  onChange={(e) => handleIProfileDataChange(e)}
                  name="email"
                  maxLength="500"
                  value={iProfileData.email || ''}
                  className="input input-bordered input-primary w-full bg-primary bg-opacity-5 h-11"
                />
              </label>
              <label className="input-group input-group-vertical">
                <span className="text-primary font-semibold bg-opacity-80">
                  Phone
                </span>
                <input
                  onChange={(e) => handleIProfileDataChange(e)}
                  name="contact"
                  maxLength="25"
                  value={iProfileData.contact || ''}
                  className="input input-bordered input-primary w-full bg-primary bg-opacity-5 h-11"
                />
              </label>
            </div>
          </div>
          <div className="modal-action justify-center">
            <label
              htmlFor="editProfile"
              className="btn btn-accent"
              onClick={handleIProfileDataSubmit}>
              Save Changes
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
