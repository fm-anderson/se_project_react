import { request } from './api';
const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://api.wtwr-fma.mooo.com'
    : 'http://localhost:3000';

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

function updateProfile(data, token) {
  const { name, avatar } = data;

  return request(`${baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  });
}

export { signup, signin, checkToken, updateProfile };
