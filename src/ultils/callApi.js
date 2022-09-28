import { aActionSetLoaded } from "../store/loader";
import store from "../store/store";

const sendData = (uri, payload) => {
  return new Promise((resolve, reject) => {
    try {
      fetch(uri, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          store.dispatch(aActionSetLoaded());
          return response.json();
        })
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    } catch (err) {
      return err;
    }
  });
};
const getData = (uri, signal) => {
  let promise = new Promise((resolve, reject) => {
    fetch(uri, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Cache-Control": "max-age=1800",
      },
      signal,
    })
      .then((res) => {
        if (res.ok) {
          store.dispatch(aActionSetLoaded());
          res.json().then((data) => {
            resolve(data);
          });
        } else {
          reject("Something went wrong");
        }
      })
      .catch((err) => {
        reject(err);
        return;
      });
  });
  return promise;
};
export { sendData, getData };
