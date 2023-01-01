import { profileTitle, profileSubtitl } from '../utils/generalVariables.js';

export default class UserInfo {
  constructor({ name, job }) {
    this._nameUser = name;
    this._jobUser = job;
  }

  getUserInfo() {
    const name = this._nameUser;
    const job = this._jobUser;
    return { name, job };
  }

  setUserInfo(nameAdd, jobAdd) {
    profileTitle.textContent = nameAdd;
    profileSubtitl.textContent = jobAdd;
  }
}
