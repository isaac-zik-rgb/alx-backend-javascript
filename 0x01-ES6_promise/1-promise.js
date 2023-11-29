export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const response = {
        status: 200,
        body: 'Success',
      };
      resolve(response);
      console.log(response);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  }).then((message) => message).catch((error) => error);
}
