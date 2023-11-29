import { uploadPhoto, createUser } from './utils';

/* export  default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoMessage, userMessage]) => {
      const profile = photoMessage.body;
      const userFullName = `${userMessage.firstName} ${userMessage.lastName}`;
      console.log(profile, userFullName);
    }).catch(() => {
      console.error('Signup system offline');
    });
}
*/
export default function handleProfileSignup() {
  return uploadPhoto().then((usermessage) => createUser().then((message) => {
    console.log(usermessage.body, message.firstName, message.lastName);
  }).catch('Signup system offline')).catch('Signup system offline');
}
