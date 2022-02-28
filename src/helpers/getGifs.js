export const getGifs = async (category) => {
  const url = `
  https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=ktro9WeSbvegWX19xeug8iqDga6A6u63
  `;
  const res = await fetch(url);
  const { data } = await res.json();

  //* map() de las imagenes
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
