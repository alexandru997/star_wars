

export const getApiResurce = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("Could not fetch.", res.status);
      return false;
    }
    return await res.json();
  } catch (error) {
    console.log("Could not fetch.", error.message);
    return false;
  }
};

// getApiResurce(SWAPI_ROOT + SWAPI_PEOPLE).then((body) => console.log(body));

// (async () => {
//   const body = await getApiResurce(SWAPI_ROOT + SWAPI_PEOPLE);
//   console.log(body);
// })();
