const BASE_URL = "https://api.github.com";

export async function fetchUsers(since = 0, perPage = 10) {
  return fetch(`${BASE_URL}/users?since=${since}&per_page=${perPage}`).then(
    (res) => res.json()
  );
}

export async function searchUsers(query, page = 0, perPage = 10) {
  const res = await fetch(
    `${BASE_URL}/search/users?q=${query}&page=${page + 1}&per_page=${perPage}`
  );
  const data = await res.json();
  return data;
}

export async function getUserDetails(username) {
  return fetch(`${BASE_URL}/users/${username}`).then((res) => res.json());
}
