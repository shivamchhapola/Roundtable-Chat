import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdUpload } from 'react-icons/md';
import pic from '../../dummy/Images/1.jpg';
import banner from '../../dummy/Images/3.jpg';

export default function EditProfile({
  profileData,
  setProfile,
  setUpdateError,
}) {
  const [iProfileData, setIProfileData] = useState({
    username: '',
    name: '',
    bio: '',
    email: '',
    contact: '',
    link: '',
  });

  const handleIProfileDataChange = (e) => {
    setIProfileData({ ...iProfileData, [e.target.name]: e.target.value });
  };

  const handleIProfileDataSubmit = async () => {
    await axios
      .post(
        `${import.meta.env.VITE_BACKEND}/api/user/updateMyProfile`,
        JSON.stringify(iProfileData),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          return setProfile(res.data);
        }
        setUpdateError(res.data);
        return console.log(res.data);
      })
      .catch((err) => {
        setUpdateError(err.response.data);
        return console.log(err);
      });
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
            htmlFor="editProfile"
            className="btn btn-sm btn-circle absolute right-2 top-2 btn-error z-50">
            ✕
          </label>
          <div className="w-full flex flex-col items-center overflow-y-auto scrollbar-hide max-h-[65vh]">
            <div
              name="Banner"
              className="w-full min-h-[10rem] rounded-t-[var(--rounded-btn)] overflow-hidden relative">
              <img
                src={banner}
                className="absolute top-[-9999px] bottom-[-9999px] left-[-9999px] right-[-9999px] m-auto object-fill w-full blur-sm"
              />
              <div className="min-h-[10rem] w-full relative flex justify-center items-center">
                <div className="btn btn-circle bg-gray-800 bg-opacity-30 border-0 text-white hover:bg-gray-700 relative btn-lg">
                  <MdUpload size="2rem" />
                  <input
                    type="file"
                    className="w-full h-full absolute opacity-0"
                  />
                </div>
              </div>
            </div>
            <div name="Profile Picture" className="avatar relative bottom-7">
              <div className="w-20 rounded-full bg-white">
                <img src={pic} className="blur-sm" />
                <div className="relative bottom-16 flex justify-center items-center">
                  <div className="btn btn-circle bg-gray-800 bg-opacity-30 border-0 text-white hover:bg-gray-700">
                    <MdUpload size="2rem" />
                    <input
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
