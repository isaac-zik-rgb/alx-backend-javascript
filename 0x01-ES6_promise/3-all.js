import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return uploadPhoto()
    .then((photoMwessage) => {
      const profile = photoMwessage.body;

      return createUser().then((userMessage) => {
        const username = ` ${userMessage.firstName} ${userMessage.lastName}`;
        console.log(profile, username);
      });
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
