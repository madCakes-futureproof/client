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
      const fetchData = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(uploadData),
      })

      const res = fetchData;
      const data = await res.json();
  
      if (!res.ok) throw new Error(`${data.message} (${res.status})`);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

export const AJAX = async function (url, uploadData = undefined) {
    try {
      const fetchData = uploadData
        ? fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(uploadData),
          })
        : fetch(url);
  
      const res = await fetchData;
      const data = await res.json();
  
      if (!res.ok) throw new Error(`${data.message} (${res.status})`);
      return data;
    } catch (err) {
      throw err;
    }
  };
  