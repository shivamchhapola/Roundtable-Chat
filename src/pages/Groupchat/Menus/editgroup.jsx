import React, { useState } from 'react';
import { MdCheck, MdUpload } from 'react-icons/md';
import { useDispatch } from 'react-redux';

export function EditGroup() {
  const dispatch = useDispatch();

  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [pic, setPic] = useState('');
  const [picBlob, setPicBlob] = useState(null);

  const editgroup = async () => {
    reset();
    await createGroup(name, bio, picBlob)
      .then(async (res) => {
        return await getGroupList().then((data) => {
          dispatch(changeGroups(data));
        });
      })

      .catch((err) => console.log(err));
  };

  const reset = () => {
    setPicBlob(null);
    setName('');
    setBio('');
  };
  return (
    <div>
      <input type="checkbox" id="editgroup" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-h-[85vh] overflow-y-auto scrollbar-hide relative min-h-[60vh]">
          <label
            onClick={reset}
            htmlFor="editgroup"
            className="btn btn-sm btn-circle absolute right-2 top-2 btn-error z-50">
            ✕
          </label>
          {error && (
            <div className="alert alert-error mt-5 p-2 flex justify-between">
              {error}
              <div
                onClick={(e) => {
                  e.preventDefault();
                  setError('');
                }}
                className="btn btn-xs btn-circle btn-outline">
                <MdCheck size="1.2rem" />
              </div>
            </div>
          )}
          <div className="w-full flex flex-col items-center overflow-y-auto scrollbar-hide max-h-[65vh]">
            <div name="Profile Picture" className="avatar relative">
              <div className="w-40 rounded-full bg-white">
                {picBlob ? (
                  <img src={URL.createObjectURL(picBlob)} />
                ) : (
                  <div className="absolute right-0 top-0 flex justify-center items-center w-full h-full">
                    <div className="btn btn-circle bg-gray-800 bg-opacity-30 border-0 text-white hover:bg-gray-700 btn-lg">
                      <MdUpload size="2.5rem" />
                      <input
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={(e) => {
                          e.preventDefault();
                          setPicBlob(e.target.files[0]);
                        }}
                        className="w-full h-full absolute opacity-0"
                      />
                    </div>
                  </div>
                )}
                <div className="absolute right-0 top-0 flex justify-center items-center w-full h-full">
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      e.preventDefault();
                      setPicBlob(e.target.files[0]);
                    }}
                    className="w-full h-full absolute opacity-0"
                  />
                </div>
              </div>
            </div>
            <div className="w-[90%] text-center flex flex-col justify-start items-center gap-4 pt-6">
              <label className="input-group input-group-vertical">
                <span className="font-semibold bg-opacity-80 text-primary-content bg-primary">
                  Group Name
                </span>
                <input
                  value={name}
                  onChange={(e) => {
                    e.preventDefault();
                    setName(e.target.value);
                  }}
                  maxLength="50"
                  name="name"
                  className="input input-bordered input-primary w-full bg-primary bg-opacity-5 h-11"
                />
              </label>
              <label className="input-group input-group-vertical">
                <span className="font-semibold bg-opacity-80 text-primary-content bg-primary">
                  Group Bio
                </span>
                <textarea
                  value={bio}
                  onChange={(e) => {
                    e.preventDefault();
                    setBio(e.target.value);
                  }}
                  name="bio"
                  maxLength="175"
                  className="textarea textarea-bordered textarea-primary w-full bg-primary bg-opacity-5 h-24 resize-none custom-scrollbar"
                />
              </label>
            </div>
          </div>
          <div className="modal-action justify-center">
            <label
              onClick={editgroup}
              htmlFor="createGroup"
              className="btn btn-accent">
              Edit Group
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
