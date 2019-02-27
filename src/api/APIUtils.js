
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
