import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

export default function login({ isLogin, data, setData }) {
  const [showPass, setShowPass] = useState(false);
  const onDataChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form
      className={`flex-col justify-center gap-3 items-center w-full ${
        !isLogin ? 'flex' : 'hidden'
      }`}>
      <input
        name="email"
        className="input input-bordered input-secondary bg-secondary bg-opacity-20 w-64 input-sm lg:input-md lg:text-base"
        value={data ? data['email'] : ''}
        placeholder="Email"
        onChange={(e) => onDataChange(e)}
      />
      <input
        name="name"
        className="input input-bordered input-secondary bg-secondary bg-opacity-20 w-64 input-sm lg:input-md lg:text-base"
        value={data ? data['name'] : ''}
        placeholder="Name"
        onChange={(e) => onDataChange(e)}
      />
      <div className="w-full flex flex-row justify-center items-center">
        <input
          name="password"
          className="input input-bordered input-secondary bg-secondary bg-opacity-20 w-64 relative left-3 input-sm lg:input-md lg:text-base"
          placeholder="Password"
          value={data ? data['password'] : ''}
          type={showPass ? 'text' : 'password'}
          onChange={(e) => onDataChange(e)}
        />
        <button
          className="relative right-5 text-secondary"
          onClick={(e) => {
            e.preventDefault();
            setShowPass(!showPass);
          }}>
          {showPass ? (
            <AiFillEyeInvisible size="1.5rem" />
          ) : (
            <AiFillEye size="1.5rem" />
          )}
        </button>
      </div>
      <input
        name="confirmPassword"
        className="input input-bordered input-secondary bg-secondary bg-opacity-20 w-64 input-sm lg:input-md lg:text-base"
        placeholder="Confirm Password"
        value={data ? data['confirmPassword'] : ''}
        type={showPass ? 'text' : 'password'}
        onChange={(e) => onDataChange(e)}
      />
      <button
        type="submit"
        className="btn btn-secondary btn-wide btn-sm lg:btn-md">
        Signup
      </button>
    </form>
  );
}
