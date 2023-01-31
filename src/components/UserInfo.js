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

  setUserInfo(nameAdd, jobAdd) {
    this._nameUser.textContent = nameAdd;
    this._jobUser.textContent = jobAdd;
    
  }

  setUserAvatar(avatarAdd){
    this._avatarUser.src = avatarAdd;
  }
}
