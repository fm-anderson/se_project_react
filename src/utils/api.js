const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://api.wtwr-fma.mooo.com'
    : 'http://localhost:3000';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

export async function request(url, options) {
  const res = await fetch(url, options);
  return checkResponse(res);
}

export const getClothingItems = () => {
  return fetch(`${baseUrl}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => checkResponse(res));
};

export const addClothingItem = ({ name, imageUrl, weather }, token) => {
  return fetch(`${baseUrl}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then((res) => checkResponse(res));
};

export const deleteCard = (id, token) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};

export const likeCard = (id, token) => {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};

export const unlikeCard = (id, token) => {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};
