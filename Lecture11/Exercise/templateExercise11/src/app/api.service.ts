import { Injectable, signal } from '@angular/core';

const initialLoginStatus = {
  loggedIn: false,
  loginError: false,
  id: "",
  username: "",
  token: ""
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = `http://webp-ilv-backend.cs.technikum-wien.at/messenger/`;

  private _loginStatus = signal(initialLoginStatus);
  public loginStatus = this._loginStatus.asReadonly();

  constructor() { }

  /**
   * logs in and updates signal loginStatus
   * @param username 
   * @param password 
   * @returns 
   */
  async login(username: string, password: string) {
    // TODO: implement login using fetch()
    this._loginStatus.set({
      loggedIn: true,
      loginError: false,
      id: "123",
      username: username,
      token: "new-token"
    })
  }

  /**
   * logs out and updates signal loginStatus
   */
  logout() {
    this._loginStatus.set(initialLoginStatus);
  }

  // TODO implement other API calls
}