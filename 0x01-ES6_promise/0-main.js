/*
import getResponseFromAPI from "./0-promise.js";


const response = getResponseFromAPI();

console.log(response instanceof Promise);

import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));


import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);

import handleProfileSignup from "./3-all";

handleProfileSignup();

import signUpUser from "./4-user-promise";

console.log(signUpUser("Bob", "Dylan"));


import uploadPhoto from './5-photo-reject';

console.log(uploadPhoto('guillaume.jpg'));
*/
import handleProfileSignup from './6-final-user';

console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
