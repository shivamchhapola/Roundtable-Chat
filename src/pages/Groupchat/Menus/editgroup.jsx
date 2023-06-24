import React, { useEffect, useState } from 'react';
import { MdCheck, MdUpload } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { changeSelectedGroup } from '../../../slices/groupSlice';
import { changeGroups } from '../../../slices/userSlice';
import {
  delGroup,
  editGroup,
  getGroupData,
  getGroupList,
  getRole,
} from '../../../utils/group';

export function EditGroup() {
  const dispatch = useDispatch();

  const groupid = useSelector((state) => state.group.selectedGroup);
  const member = useSelector((state) => state.group.member);

  const [myRole, setMyRole] = useState({ tier: 1 });
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [pic, setPic] = useState('');
  const [picBlob, setPicBlob] = useState(null);
  const [delMode, setDelMode] = useState(false);

  const getGroup = async () => {
    reset();
    try {
      let group = await getGroupData(groupid);
      setName(group.data.name);
      setBio(group.data.bio);
      setPic(group.data.pic);
      return;
    } catch (error) {
      return setError(error.response.data);
    }
  };

  const GetMyRole = async () => {
    return await getRole(member.roleId)
      .then((res) => {
        return setMyRole(res.data);
      })
      .catch((err) => console.log(err));
  };

  const editgroup = async () => {
    try {
      let group = await editGroup(name, bio, picBlob, member.memberId, groupid);
      dispatch(changeSelectedGroup(''));
      setName(group.data.name);
      setBio(group.data.bio);
      setPic(group.data.pic);
      setGroupListData();
      dispatch(changeSelectedGroup(group.data._id));
      return;
    } catch (error) {
      getGroup();
      return setError(error.response.data);
    }
  };

  const delgroup = async () => {
    try {
      reset();
      await delGroup(groupid, member.memberId).then((res) => {
        setGroupListData();
      });
      return;
    } catch (error) {
      return setError(error.response.data);
    }
  };

  const setGroupListData = async () => {
    dispatch(changeGroups([]));
    await getGroupList().then((data) => {
      if (data) {
        dispatch(changeGroups(data));
        return data;
      }
    });
  };

  const reset = () => {
    setPicBlob(null);
    setName('');
    setBio('');
    setPic('');
    setDelMode(false);
  };

  useEffect(() => {
    if (groupid) getGroup();
    if (member.roleId) GetMyRole();
  }, [groupid, member]);

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
            <div className="alert alert-error mt-5 mb-2 p-2 flex justify-between">
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
                    <div className="btn btn-circle bg-gray-800 bg-opacity-30 border-0 text-white hover:bg-gray-700 btn-lg w-full h-full overflow-hidden">
                      <img src={pic} />
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
                    disabled={myRole.tier < 4}
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
                  disabled={myRole.tier < 5}
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
                  disabled={myRole.tier < 4}
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
          <div className="modal-action justify-around flex-row">
            <input
              type="button"
              value="Delete Group"
              onClick={() => {
                setDelMode(true);
              }}
              disabled={myRole.tier < 5}
              className="btn btn-error"
            />
            <label
              onClick={myRole.tier < 4 ? () => {} : editgroup}
              htmlFor="editgroup"
              className={`btn btn-accent ${myRole.tier < 4 && 'btn-disabled'}`}>
              Edit Group
            </label>
          </div>
          {delMode && (
            <DelGroup
              gname={name}
              setDelMode={setDelMode}
              OnDelGroup={delgroup}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function DelGroup({ gname, setDelMode, OnDelGroup }) {
  return (
    <div className="absolute top-[40%] w-full right-0 p-2 flex justify-center items-center">
      <div className="bg-error w-full px-4 py-2 rounded">
        <div className="alert alert-error">
          <div className="text-error-content font-semibold">
            Are you sure, you wanna delete "{gname}" Group?
          </div>
          <button
            onClick={(e) => {
              setDelMode(false);
            }}
            className="btn btn-circle text-[1.2rem] btn-outline">
            ✕
          </button>
          <label
            htmlFor="editgroup"
            onClick={(e) => {
              e.preventDefault();
              OnDelGroup();
            }}
            className="btn btn-circle btn-outline">
            <MdCheck size="1.5rem" />
          </label>
        </div>
      </div>
    </div>
  );
}
