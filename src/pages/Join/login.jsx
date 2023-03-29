import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
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
        isLogin ? 'flex' : 'hidden'
      }`}>
      <input
        name="username"
        className="input input-bordered input-secondary bg-secondary bg-opacity-20 w-64 input-sm lg:input-md lg:text-base"
        value={data ? data['username'] : ''}
        placeholder="Username/Email"
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
      <button className="font-extralight text-xs text-right w-64 relative bottom-1 link">
        Forgot Password?
      </button>
      <button className="btn btn-accent btn-wide btn-sm lg:btn-md">
        <FcGoogle
          size="1.2rem"
          style={{
            marginRight: '0.2rem',
            marginBottom: '0.1rem',
            verticalAlign: 'middle',
            display: 'initial',
          }}
        />
        Login with Google
      </button>
      <button
        type="submit"
        className="btn btn-secondary btn-wide btn-sm lg:btn-md">
        Login
      </button>
    </form>
  );
}
