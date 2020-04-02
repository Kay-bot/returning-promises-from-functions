const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, users: `Bilbo` },
          { id: 5, username: `Esmeralda` }
        ],
        "/about": "This is the about page!"
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 600);
  });
};

fakeRequest("/users")
  .then((res) => {
    console.log(`Status code:`, res.status);
    console.log(`Data:`, res.data);
  })
  .catch((res) => {
    console.log(res.status);
    console.log("Request failed");
  });

fakeRequest("/dogs")
  .then((res) => {
    console.log(`Status code:`, res.status);
    console.log(`Data:`, res.data);
    console.log("Request worked");
  })
  .catch((res) => {
    console.log(res.status);
    console.log("Request failed");
  });
