import axios from 'axios';

export const createGroup = async (name, bio, picBlob) => {
  const groupFromData = new FormData();
  groupFromData.append('name', name);
  groupFromData.append('bio', bio);
  groupFromData.append('pic', picBlob);
  return await axios
    .post(
      `${import.meta.env.VITE_BACKEND}/api/group/creategroup`,
      groupFromData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        },
      }
    )
    .then(async (res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const getGroupList = async () => {
  return await axios
    .get(`${import.meta.env.VITE_BACKEND}/api/user/getmygroups`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getGroupData = async (id) => {
  return await axios
    .get(`${import.meta.env.VITE_BACKEND}/api/group/getgroupdata?id=${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getChatroom = async (id) => {
  return axios
    .get(`${import.meta.env.VITE_BACKEND}/api/group/getchatroom?id=${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const getGroupMenuData = async (selectedGroupID) => {
  return await axios
    .get(
      `${
        import.meta.env.VITE_BACKEND
      }/api/group/getgroupmenudata?id=${selectedGroupID}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const getMyMemberData = async (selectedGroupID) => {
  return await axios
    .get(
      `${
        import.meta.env.VITE_BACKEND
      }/api/group/getMyMember?groupid=${selectedGroupID}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const getMemberData = async (id) => {
  return await axios
    .get(`${import.meta.env.VITE_BACKEND}/api/group/getMember?id=${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const editMember = async (data) => {
  return await axios
    .post(
      `${import.meta.env.VITE_BACKEND}/api/group/editmember`,
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        },
      }
    )
    .then((res) => {
      return res;
    });
};

export const delMember = async (data) => {
  return await axios
    .post(
      `${import.meta.env.VITE_BACKEND}/api/group/delmember`,
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        },
      }
    )
    .then((res) => {
      return res;
    });
};

export const getRole = async (id) => {
  return await axios
    .get(`${import.meta.env.VITE_BACKEND}/api/group/getRole?id=${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addRole = async (data) => {
  return await axios
    .post(
      `${import.meta.env.VITE_BACKEND}/api/group/addrole`,
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        },
      }
    )
    .then((res) => {
      return res;
    });
};

export const editRole = async (data) => {
  return await axios
    .post(
      `${import.meta.env.VITE_BACKEND}/api/group/editrole`,
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        },
      }
    )
    .then((res) => {
      return res;
    });
};

export const delRole = async (data) => {
  return await axios
    .post(
      `${import.meta.env.VITE_BACKEND}/api/group/delrole`,
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        },
      }
    )
    .then((res) => {
      return res;
    });
};
