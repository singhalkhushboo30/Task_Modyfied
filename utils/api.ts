const BASE_URL = 'https://demo.modifyed.xyz/wp-json/wp/v2';

export async function fetchPosts() {
  const res = await fetch(`${BASE_URL}/posts`);
  return await res.json();
}

export async function fetchPost(id: string) {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  return await res.json();
}

export async function fetchPages() {
  const res = await fetch(`${BASE_URL}/pages`);
  return await res.json();
}

export async function fetchPage(id: string) {
  const res = await fetch(`${BASE_URL}/pages/${id}`);
  return await res.json();
}
