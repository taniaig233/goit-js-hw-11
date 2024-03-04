export function getPictures(name) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '42680583-e819b638960e20d04367e2a0d';

  if (name.includes(' ')) {
    name.replace(/\s+/g, '+');
  }

  const searchParams = new URLSearchParams({
    key: KEY,
    q: name,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  })

  return fetch(`${BASE_URL}?${searchParams}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
}
