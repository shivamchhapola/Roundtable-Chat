import React, { useEffect, useState } from 'react';
import { changeSelectedGroup } from '../../slices/groupSlice';
import { useDispatch, useSelector } from 'react-redux';
import { MdAdd, MdLink } from 'react-icons/md';
import { getGroupData } from '../../utils/group';

export default function Groups() {
  const groupIDs = useSelector((state) => state.user.groups);

  return (
    <div className="w-full">
      <div className="h-12 w-full flex flex-col relative">
        <div className="absolute h-full flex justify-center items-center left-1 bottom-[0.15rem]">
          <div className="tooltip tooltip-right" data-tip="Join Group">
            <label
              htmlFor="joinGroup"
              className="btn btn-circle btn-sm btn-ghost hover:animate-[spin_0.75s_linear_0.5]">
              <MdLink size="1.5rem" />
            </label>
          </div>
        </div>
        <div className="pt-2 pb-1 text-center font-semibold flex-1">
          Your Groups
        </div>
        <div className="absolute h-full flex justify-center items-center right-1 bottom-[0.15rem]">
          <div className="tooltip tooltip-left" data-tip="Create Group">
            <label
              htmlFor="createGroup"
              className="btn btn-circle btn-sm btn-ghost hover:animate-[spin_0.75s_linear_0.5]">
              <MdAdd size="1.5rem" />
            </label>
          </div>
        </div>
        <div className="divider divider-vertical my-0"></div>
      </div>
      <div className="px-2 w-full h-[calc(100vh-5.75rem)] overflow-y-auto overflow-x-hidden flex flex-col justify-start gap-1 scrollbar-hide">
        {groupIDs &&
          groupIDs.map((id) => {
            return <GroupItem key={id} id={id} />;
          })}
        <div className="w-full py-6"></div>
      </div>
    </div>
  );
}

function GroupItem({ id }) {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [pic, setPic] = useState('');

  const GetGroupData = async () => {
    return await getGroupData(id)
      .then((res) => {
        setName(res.data.name);
        setBio(res.data.bio);
        setPic(res.data.pic);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dispatch = useDispatch();
  const selectedGroup = useSelector((state) => state.group.selectedGroup);

  useEffect(() => {
    GetGroupData();
  }, []);

  return (
    <div
      onClick={() => dispatch(changeSelectedGroup(id))}
      className={`btn btn-ghost flex-row normal-case w-full ${
        selectedGroup == id && 'btn-active'
      }`}>
      <div className="avatar placeholder">
        <div className="h-11 rounded-full bg-secondary">
          {pic ? (
            <img src={pic} />
          ) : (
            <span className="text-3xl">{name[0]}</span>
          )}
        </div>
      </div>
      <div className="flex-1 flex flex-col px-2.5 justify-between whitespace-nowrap min-w-[5rem] overflow-hidden">
        <div className="text-left min-w-[3rem] overflow-hidden overflow-ellipsis">
          {name}
        </div>
        <div className="text-left text-xs font-normal min-w-[3rem] overflow-hidden overflow-ellipsis">
          ~{bio}
        </div>
      </div>
    </div>
  );
}
