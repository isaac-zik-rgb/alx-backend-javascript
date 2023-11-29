export default async function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const response = {
        status: 200,
        body: 'Success',
      };
      resolve(response);
    } else {
      reject(new Error({ Error: 'The fake API is not working currently' }));
    }
  }).then((message) => message).catch((error) => error);
}
