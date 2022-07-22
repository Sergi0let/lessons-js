// export const fetchUserData = userName => {
//   return fetch(`https://api.github.com/users/${userName}`).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error('Failed to load data');
//   });
// };

// export const fetchRepositories = url =>
//   fetch(url).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error('Failed to load data');
//   });

// ------------------------------------------

export const fetchUserData = async userName => {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to load data');
};

export const fetchRepositories = async url => {
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to load data');
};
