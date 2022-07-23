// const getUsersBlogs = async users => {
//   const usersLinks = users.map(link => `https://api.github.com/users/${link}`);
//   console.log(usersLinks);
//   const blogLink = await getBlogLink(usersLinks);

//   Promise.all(
//     blogLink.map(async link => {
//       const getUser = async link => {
//         try {
//           const response = await fetch(link);
//           if (!response.ok) {
//             return null;
//           }
//           const userData = await response.json();
//           return userData.data;
//         } catch (err) {
//           throw new Error('Failed to get user data');
//         }
//       };
//     }),
//   );
// };

// First promise returns an array
// const getUsers = () => {
//   return new Promise((resolve, reject) => {
//     return setTimeout(
//       () => resolve([{ id: 'jon' }, { id: 'andrey' }, { id: 'tania' }]),
//       600
//     )
//   })
// }
// -------------------------------------------------------------------------------------

const getBlog = async blogId => {
  try {
    const response = await fetch(`https://api.github.com/users/${blogId}`);
    if (!response.ok) {
      return null;
    }
    const blogData = await response.json();
    // console.log(userData.blog);
    return blogData.blog;
  } catch (err) {
    throw new Error('Failed to get user data');
  }
};

// -------------------------------------------------------------------------------------

const getUsersBlogs = async users => {
  const result = await Promise.all(users.map(user => getBlog(user)));
  return result;
};

// runAsyncFunctions();
// -------------------------------------------------------

// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
// getUsersBlogs(['google']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]

// 'https://api.github.com/users/google';
