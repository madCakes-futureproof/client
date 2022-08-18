export const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const postJSON = async function (url, uploadData) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(uploadData),
    }

    const fetchData = await fetch(url, options)

    const res = fetchData;
    const post = await res.json();

    return post;
  } catch (err) {
    console.log(err);
  }
};
