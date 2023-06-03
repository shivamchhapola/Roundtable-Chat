import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function login({ isLogin }) {
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [data, setData] = useState({ username: '', password: '' });

  const onDataChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const login = async (e) => {
    e.preventDefault();
    setData({ username: '', password: '' });
    return await axios
      .post(`${import.meta.env.VITE_BACKEND}/api/login`, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        if (res.status !== 200) throw new Error("Couldn't login, try again!");

        localStorage.setItem('userToken', res.data);
        navigate('/groupchat');
      })
      .catch((e) => {
        setLoginError(e.response.data || e.message || e.data);
        return console.log(e);
      });
  };

  useEffect(() => {
    setLoginError('');
  }, [isLogin]);

  return (
    <form
      onSubmit={login}
      method="POST"
      className={`flex-col justify-center gap-3 items-center w-full ${
        isLogin ? 'flex' : 'hidden'
      }`}>
      <input
        name="username"
        className="input input-bordered input-secondary bg-secondary text-secondary-content bg-opacity-20 max-w-[16rem] min-w-[10rem] w-full input-sm lg:input-md lg:text-base"
        value={data ? data['username'] : ''}
        placeholder="Username/Email"
        onChange={(e) => onDataChange(e)}
      />
      <div className="w-full flex flex-row justify-center items-center">
        <input
          name="password"
          className="input input-bordered input-secondary bg-secondary text-secondary-content bg-opacity-20 max-w-[16rem] min-w-[10rem] w-full input-sm lg:input-md lg:text-base"
          placeholder="Password"
          value={data ? data['password'] : ''}
          type={showPass ? 'text' : 'password'}
          onChange={(e) => onDataChange(e)}
        />
        <button
          className="relative right-8 mr-[-1.5rem] text-secondary"
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
      <button className="font-extralight text-xs text-right max-w-[16rem] min-w-[10rem] w-full relative bottom-1 link text-error">
        Forgot Password?
      </button>
      <button className="btn btn-accent max-w-[16rem] min-w-[10rem] w-full btn-sm lg:btn-md flex-row">
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
        className="btn btn-secondary max-w-[16rem] min-w-[10rem] w-full btn-sm lg:btn-md">
        Login
      </button>
      {loginError === '' ? (
        ''
      ) : (
        <div className="alert alert-error shadow-lg p-2">
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
            <span>{loginError}</span>
          </div>
        </div>
      )}
    </form>
  );
}
