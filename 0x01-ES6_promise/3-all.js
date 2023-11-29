import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return uploadPhoto().then((usermessage) => createUser().then((message) => {
    console.log(usermessage.body, message.firstName, message.lastName);
  }).catch('Signup system offline')).catch('Signup system offline');
}
