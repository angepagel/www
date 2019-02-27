
export async function getPosts() {
  let posts = [];

  posts = await fetch(`${process.env.REACT_APP_PROXY}/api/posts`)
    .then(
      res => res.json()
    )
    .then(
      json => json.data
    )
    .catch(
      error => console.error(error)
    );

  return posts;
}

export function saveToken(token) {
  localStorage.setItem('token', token);
}

export function getToken() {
  return localStorage.getItem('token');
}

export function isAuth() {
  return (getToken() !== null);
}

export function logout() {
  localStorage.removeItem('token');
}

export async function login(username, password) {
  const message = await fetch(`${process.env.REACT_APP_PROXY}/api/login`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
    .then(
      res => res.json()
    )
    .then(
      json => {
        saveToken(json.token);
        return json.apicode;
      }
    )  
    .catch(
      error => error
    );

  return message;
}
