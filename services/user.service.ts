import { BehaviorSubject } from 'rxjs';
import Router from 'next/router';

import { fetchWrapper } from 'utils';

let user: any;
if (typeof window !== 'undefined') {
  // Perform localStorage action
  user = localStorage.getItem('user');
}
const userSubject: any = new BehaviorSubject<any>(
  process.browser && JSON.parse(user)
);

export const userService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  },
  login,
  logout,
  // getAll,
};

async function login(email: String, password: String) {
  return fetchWrapper
    .post(`/auth/login/email`, { email, password })
    .then((user: any) => {
      // publish user to subscribers and store in local storage to stay logged in between page refreshes
      userSubject.next(user);
      localStorage.setItem('user', JSON.stringify(user));

      return user;
    })
    .catch((errors: any) => {
      console.log('errors :>> ', errors);
    });
}

function logout() {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  localStorage.removeItem('user');
  userSubject.next(null);
  Router.push('/login/fans');
}

// function getAll() {
//   return fetchWrapper.get();
// }
