import { fetchWrapper } from 'utils';

export const authService = {
  register,
};
function register(user: any) {
  user.gender = user.gender.toLowerCase();
  return fetchWrapper.post(`/auth/users/register`, user);
}
