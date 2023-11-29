import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return uploadPhoto()
    .then((photoMwessage) => {
      const profile = photoMwessage.body;

      return createUser().then((userMessage) => {
        console.log(profile, userMessage.firstName, userMessage.lastName);
      });
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
