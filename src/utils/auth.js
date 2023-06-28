import { request } from './api';
const baseUrl = 'http://localhost:3001';

// function signup(data) {
//   const { name, avatar, email, password } = data;

//   return request(`${baseUrl}/signup`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name, avatar, email, password }),
//   });
// }

function signup(data) {
  const { name, avatar, email, password } = data;

  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ avatar, email, name, password }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
  // .then((res) => res);
}

function signin(user) {
  const { email, password } = user;

  return request(`${baseUrl}/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
}

function checkToken(token) {
  return request(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

export { signup, signin, checkToken };
