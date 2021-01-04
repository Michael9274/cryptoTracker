export const asyncPost = async (queryData) => {
  let {url, formData, method = 'POST', type = 'json'} = queryData;
  const settings = {
    method: method,
    body: formData,
    headers: {
      Accept: 'application/json',
    },
  };

  const fetchResponse = await fetch(`${url}`, settings);
  const data =
    type !== 'json' ? await fetchResponse.text() : await fetchResponse.json();

  if (!fetchResponse.ok) {
    throw data;
  }

  return data;
};

export const asyncGet = async (url, type = 'json') => {
  const fetchResponse = await fetch(`${url}`);
  const data =
    type !== 'json' ? await fetchResponse.text() : await fetchResponse.json();

  if (!fetchResponse.ok) {
    throw data;
  }

  return data;
};
