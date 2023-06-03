import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdCopyAll, MdUpload } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { changeGroups } from '../../../slices/userSlice';
import { createGroup, getGroupData, getGroupList } from '../../../utils/group';

export function CreateGroup() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [picBlob, setPicBlob] = useState(null);

  const ccreateGroup = async () => {
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
      <input type="checkbox" id="createGroup" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-h-[85vh] overflow-y-auto scrollbar-hide relative">
          <label
            onClick={reset}
            htmlFor="createGroup"
            className="btn btn-sm btn-circle absolute right-2 top-2 btn-error z-50">
            ✕
          </label>
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
              onClick={ccreateGroup}
              htmlFor="createGroup"
              className="btn btn-accent">
              Create Group
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export function JoinGroup() {
  const dispatch = useDispatch();
  const [groupid, setGroupid] = useState('');

  const onJoinGroup = async () => {
    setGroupid('');
    await axios
      .post(
        `${import.meta.env.VITE_BACKEND}/api/group/joingroup`,
        JSON.stringify({ groupid }),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('userToken')}`,
          },
        }
      )
      .then(async (res) => {
        return await getGroupList().then((data) => {
          dispatch(changeGroups(data));
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input type="checkbox" id="joinGroup" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-h-[85vh] overflow-y-auto scrollbar-hide relative">
          <label
            onClick={() => {
              setGroupid('');
            }}
            htmlFor="joinGroup"
            className="btn btn-sm btn-circle absolute right-2 top-2 btn-error z-50">
            ✕
          </label>
          <div className="w-full flex flex-col overflow-y-auto scrollbar-hide max-h-[65vh] text-center justify-start items-center gap-4 pt-8">
            <label className="input-group input-group-vertical">
              <span className="font-semibold bg-opacity-80 text-primary-content bg-primary">
                Group ID
              </span>
              <input
                onChange={(e) => {
                  e.preventDefault();
                  setGroupid(e.target.value);
                }}
                onPaste={(e) => {
                  setGroupid(e.target.value);
                }}
                value={groupid}
                maxLength="50"
                name="gid"
                className="input input-bordered input-primary w-full bg-primary bg-opacity-5 h-11"
              />
            </label>
          </div>
          <div className="modal-action justify-center">
            <label
              onClick={onJoinGroup}
              htmlFor="joinGroup"
              className="btn btn-accent">
              Join Group
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InviteMenu() {
  const [groupid, setGroupid] = useState('');
  const [copied, setCopied] = useState(false);
  const selectedGroup = useSelector((state) => state.group.selectedGroup);

  const GetGroupData = async () => {
    return await getGroupData(selectedGroup)
      .then((res) => {
        setGroupid(res.data.groupid);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (selectedGroup) GetGroupData();
  }, [selectedGroup]);

  return (
    <div>
      <input type="checkbox" id="inviteMenu" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-h-[85vh] overflow-y-auto scrollbar-hide relative">
          <label
            onClick={() => setCopied(false)}
            htmlFor="inviteMenu"
            className="btn btn-sm btn-circle absolute right-2 top-2 btn-error z-50">
            ✕
          </label>
          <div className="w-full flex flex-col overflow-y-auto scrollbar-hide max-h-[65vh] text-center justify-start items-center gap-4 pt-8 relative">
            <label className="input-group input-group-vertical">
              <span className="font-semibold bg-opacity-80 text-primary-content bg-primary">
                Group ID
              </span>
              <input
                readOnly
                maxLength="50"
                name="gid"
                value={groupid}
                className="input input-bordered input-primary w-full bg-primary bg-opacity-5 h-11"
              />
            </label>
            <div
              className="absolute right-1 top-[3.75rem] tooltip tooltip-left  tooltip-success"
              data-tip={copied ? 'Group ID Copied' : 'Copy Group ID'}>
              <label
                htmlFor="inviteMenu"
                onClick={() => {
                  setCopied(true);
                  navigator.clipboard.writeText(groupid);
                }}
                className={`h-9 w-9 rounded-full hover:bg-base-200 flex justify-center items-center transition-all duration-[250ms] ${
                  copied && 'text-success'
                }`}>
                <MdCopyAll size="1.2rem" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
