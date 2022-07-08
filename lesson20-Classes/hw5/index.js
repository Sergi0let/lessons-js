/* eslint-disable max-classes-per-file */
class User {
  // input: id, name, sessionId ( string, string, string)
  // output: none
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  // input: users
  // output: none
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(el => el._name);
  }

  getUserIds() {
    return this._users.map(el => el._id);
  }

  getUserNameById(i) {
    return this.users.find(({ id }) => i === id).name;
  }
}

// examples
const user = new User('1', 'Tom', 'session-id');

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'
// но изменить эти свойства нельзя
user.name = 'Bob'; // пытаемся изменить старое значение
console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
// --------------------------

const userRep = new UserRepository(user);
console.log(userRep);
console.log('user', userRep.users);
// console.log(userRep.getUserNames());
// console.log(userRep.getUserIds());
console.log('find', userRep.getUserNameById());
//-------------------------
