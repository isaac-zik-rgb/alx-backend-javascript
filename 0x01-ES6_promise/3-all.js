import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoMessage, userMessage]) => {
      const profile = photoMessage.body;
      const userFullName = `${userMessage.firstName} ${userMessage.lastName}`;
      console.log(profile, userFullName);
    }).catch(() => {
      console.error('Signup system offline');
    });
}
