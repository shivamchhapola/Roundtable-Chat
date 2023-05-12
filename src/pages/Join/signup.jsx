import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useNavigate } from 'react-router';

export default function login({ isLogin }) {
  const navigate = useNavigate();

  const [signupError, setSignupError] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [data, setData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  const onDataChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const signup = async (e) => {
    e.preventDefault();
    setData({
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    });
    if (data.password !== data.confirmPassword) return;
    return await axios
      .post(
        `${import.meta.env.VITE_BACKEND}/api/register`,
        JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        if (res.status !== 200) throw new Error(res);

        localStorage.setItem('userToken', res.data);
        navigate('/groupchat');
      })
      .catch((e) => {
        setSignupError(e.response.data || e.data);
        return console.log(e.response.data);
      });
  };

  useEffect(() => {
    setSignupError('');
  }, [isLogin]);

  return (
    <form
      onSubmit={signup}
      method="POST"
      className={`flex-col justify-center gap-3 items-center w-full ${
        !isLogin ? 'flex' : 'hidden'
      }`}>
      <input
        name="email"
        className="input input-bordered input-secondary bg-secondary text-secondary-content bg-opacity-20 max-w-[16rem] min-w-[10rem] w-full input-sm lg:input-md lg:text-base"
        value={data ? data['email'] : ''}
        placeholder="Email"
        onChange={(e) => onDataChange(e)}
      />
      <input
        name="name"
        className="input input-bordered input-secondary bg-secondary text-secondary-content bg-opacity-20 max-w-[16rem] min-w-[10rem] w-full input-sm lg:input-md lg:text-base"
        value={data ? data['name'] : ''}
        placeholder="Name"
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
      <input
        name="confirmPassword"
        className="input input-bordered input-secondary bg-secondary text-secondary-content bg-opacity-20 max-w-[16rem] min-w-[10rem] w-full input-sm lg:input-md lg:text-base"
        placeholder="Confirm Password"
        value={data ? data['confirmPassword'] : ''}
        type={showPass ? 'text' : 'password'}
        onChange={(e) => onDataChange(e)}
      />
      <button
        type="submit"
        className="btn btn-secondary max-w-[16rem] min-w-[10rem] w-full btn-sm lg:btn-md">
        Signup
      </button>

      {signupError === '' ? (
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
            <span>{signupError}</span>
          </div>
        </div>
      )}
    </form>
  );
}
