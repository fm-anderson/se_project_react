const baseUrl = 'http://localhost:3001';

function signup(data) {
  const { name, avatar, email, password } = data;

  return request(`${baseUrl}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, avatar, email, password }),
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
