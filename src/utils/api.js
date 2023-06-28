// --- baseUrl for github pages. Will deploy after code review is complete. ---
// const baseUrl = 'https://my-json-server.typicode.com/fm-anderson/se_project_react';

const baseUrl = 'http://localhost:3001';

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

export const addClothingItem = ({ name, imageUrl, weather }) => {
  return fetch(`${baseUrl}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then((res) => checkResponse(res));
};

export const deleteCard = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => checkResponse(res));
};
