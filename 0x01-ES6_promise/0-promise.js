export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('true');
    reject('false');
  }).then((message) => message).catch((Error) => Error);
}
