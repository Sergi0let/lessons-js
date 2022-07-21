const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user_name');
const userLocationElem = document.querySelector('.user__location');

const defaultElem = 'https://avatars3.githubusercontent.com/u10001';

userAvatarElem.src = defaultElem;

const fetchUserData = userName => {
  return fetch(`https://api.github.com/users/${userName}`).then(response => response.json());
};

const renderUserData = userData => {
  const { avatar_url, name, location } = userData;
  userNameElem.textContent = name;
  userAvatarElem.src = avatar_url;
  userLocationElem.textContent = location ? `from ${location}` : '';
};

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
  const userName = userNameInputElem.value;
  fetchUserData(userName).then(userData => renderUserData(userData));
};
