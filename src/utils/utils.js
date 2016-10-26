export function $(ele) {
  return document.querySelectorAll(ele);
}

class CurrentUser {
  constructor() {
    this.name = '五年后的我';
    this.avatar = null;
    this.setUser = this.setUser.bind(this);
    this.indexLoaded = false;
  }
  setUser(name, avatar) {
    this.name = name;
    this.avatar = avatar;
  }
  init() {
    this.name = '五年后的我';
    this.avatar = null;
    this.indexLoaded = false;
  }
  load() {
    this.indexLoaded = true;
  }
}

export const User = new CurrentUser();

