import React, { useEffect, useState } from 'react';
import { MdCall, MdEdit, MdMail } from 'react-icons/md';
import { useSelector } from 'react-redux';
import EditProfile from './editProfile';

export default function Profile() {
  const profileData = useSelector((state) => state.user.data);

  const [updateError, setUpdateError] = useState('');

  return (
    <div className="max-w-[28rem] w-full flex flex-col items-center py-12 overflow-y-auto scrollbar-hide">
      {updateError === '' ? (
        ''
      ) : (
        <div className="alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{updateError}</span>
          </div>
        </div>
      )}
      {/*Banner and profile Pic */}
      <div
        name="Banner"
        className="bg-primary w-full h-40 rounded-t-[var(--rounded-btn)] overflow-hidden relative">
        {profileData && profileData.banner && (
          <img
            src={profileData.banner}
            className="absolute top-[-9999px] bottom-[-9999px] left-[-9999px] right-[-9999px] m-auto object-fill w-full"
          />
        )}
        <label
          htmlFor="editProfile"
          className="absolute btn btn-circle right-2 top-2 bg-gray-800 bg-opacity-30 border-0 text-white hover:bg-gray-700">
          <MdEdit size="1.25rem" />
        </label>
      </div>
      <div name="Profile Picture" className="avatar relative bottom-7">
        <div className="w-20 rounded-full bg-white">
          {profileData && profileData.pic && <img src={profileData.pic} />}
        </div>
      </div>

      {/*Username, Name, Bio, Link*/}
      <div className="w-[90%] text-center flex flex-col justify-start items-center">
        <span className="font-semibold w-full">
          u/{(profileData && profileData.username) || ''}
        </span>
        <span className="text-2xl font-semibold text-primary">
          {profileData && profileData.name}
        </span>
        {profileData && profileData.bio === '' ? (
          <span className="text-xs opacity-50 pt-1">No Bio</span>
        ) : (
          <span>{(profileData && profileData.bio) || ''}</span>
        )}
        <span>
          {profileData && profileData.link === '' ? (
            <span className="text-xs opacity-50 pt-1">No Link</span>
          ) : (
            <a
              href={profileData && profileData.link}
              target="_blank"
              className="link link-info text-sm">
              {(profileData && profileData.link) || ''}
            </a>
          )}
        </span>
      </div>

      {/*Contact Info */}
      <div className="w-[95%] mt-12 flex flex-col items-start">
        <span className="text-xl font-semibold">Contact Info:</span>
        <span className="mt-3 pl-2 flex flex-row">
          <MdMail className="pt-1.5" size="1.3rem" />
          <a
            href={`mailto:${(profileData && profileData.email) || ''}`}
            target="_blank"
            className="link link-info">
            {(profileData && profileData.email) || ''}
          </a>
        </span>
        <span className="mt-3 pl-2 flex flex-row">
          <MdCall className="pt-1.5" size="1.3rem" />
          {profileData && profileData.contact === '' ? (
            <span className="text-xs opacity-50 pt-1">No Phone Number</span>
          ) : (
            <a
              href={`tel:${profileData && profileData.contact}`}
              target="_blank"
              className="link link-info">
              {profileData && profileData.contact}
            </a>
          )}
        </span>
      </div>

      {/*Change password*/}
      <div className="mt-12 w-[95%]">
        <span className="link link-error text-xs">Change password?</span>
      </div>

      <EditProfile setUpdateError={setUpdateError} />
    </div>
  );
}
