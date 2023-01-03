//import { profileTitle, profileSubtitl } from '../utils/generalVariables.js';

export default class UserInfo {
  constructor({ name, job }) {
    this._nameUser = document.querySelector(name);
    this._jobUser = document.querySelector(job);
  }

  getUserInfo() {
    const name = this._nameUser.textContent;
    const job = this._jobUser.textContent;
    return { name, job };
  }

  setUserInfo(nameAdd, jobAdd) {
    this._nameUser.textContent = nameAdd;
    this._jobUser.textContent = jobAdd;
  }
}
