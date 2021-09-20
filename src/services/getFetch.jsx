const getFetch = async (url) => {
  const apiUrl =
    process.env.REACT_APP_MARVEL_API +
    url +
    '?apikey=00d89e5a3a39f55fe827d4e031a665ac';
  const response = await fetch(apiUrl);

  if (!response.ok) throw new Error('algo falló');

  const { data } = await response.json();

  return data;
};

export default getFetch;
