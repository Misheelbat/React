import decode from 'jwt-decode';
class AuthService {
  getUser() {
    return decode(this.getToken());
  }
  getToken() {
    return localStorage.getItem('token');
  }
  login(userToken) {
    localStorage.setItem('token', userToken);
  }
  islogged() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
export default new AuthService();
