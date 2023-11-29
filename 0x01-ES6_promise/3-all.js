import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoMessage, userMessage]) => {
      console.log(photoMessage.body, userMessage.firstName, userMessage.lastName);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
