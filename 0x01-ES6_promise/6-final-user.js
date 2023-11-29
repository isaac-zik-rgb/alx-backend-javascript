import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];
  return Promise.allSettled(promise).then((result) => result.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason.toString(),
  })));
}
