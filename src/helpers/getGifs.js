export const getGifs = async (category) => {
  const apiKey = 'ktro9WeSbvegWX19xeug8iqDga6A6u63';
  const limit = 10;
  const encodedCategory = encodeURI(category);
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodedCategory}&limit=${limit}&api_key=${apiKey}`;

  try {
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }));

    return gifs;
  } catch (error) {
    console.error('Error fetching GIFs:', error);
    throw error;
  }
};
