export default function getFullResponseFromAPI(success) {
  const successMsg = {
    status: 200,
    body: 'Success',
  };
  const errorMsg = 'The fake API is not working currently';

  return new Promise((resolve, reject) => {
    if (success) {
      resolve(successMsg);
    } else {
      reject(new Error(errorMsg));
    }
  });
}
