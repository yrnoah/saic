export function $(ele) {
  return document.querySelectorAll(ele);
}

class CurrentUser {
  constructor() {
    this.name = '五年后的我';
    this.avatar = null;
    this.setUser = this.setUser.bind(this);
  }
  setUser(name, avatar) {
    this.name = name;
    this.avatar = avatar;
  }
  init() {
    this.name = '我';
    this.avatar = null;
  }
}

export const User = new CurrentUser();
