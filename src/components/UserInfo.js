export default class UserInfo {
  constructor({ name, job, avatar }) {
    this._nameUser = document.querySelector(name);
    this._jobUser = document.querySelector(job);
    this._avatarUser = document.querySelector(avatar);
  }

  getUserInfo() {
    const name = this._nameUser.textContent;
    const job = this._jobUser.textContent;
    return { name, job };
  }

  setUserInfo({ name, about }) {
    this._nameUser.textContent = name;
    this._jobUser.textContent = about;
  }
  
  setUserAvatar({ avatar }) {
    this._avatarUser.src = avatar;
  }
}
