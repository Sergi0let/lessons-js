// const addImageWithPromise = imgSrc => {
//   const p = new Promise((resolveCb, rejectCb) => {
//     const imgElem = document.createElement('img');
//     imgElem.setAttribute('alt', 'My photo');
//     const containerElem = document.querySelector('.page');
//     imgElem.src = imgSrc;
//     containerElem.append(imgElem);

//     const onImageLoaded = () => {
//       const { width, height } = imgElem;
//       resolveCb({ width, height });
//     };

//     imgElem.addEventListener('load', onImageLoaded);
//     imgElem.addEventListener('error', () => rejectCb(new Error('Image load fail')));
//   });
//   return p;
// };

// const imgSrc =
//   'https://gromcode.s3.eu-central-1.aazonaws.com/front-end/html-css/lesson24/hw1/illustration-window.png';

// const result = addImageWithPromise(imgSrc);
// console.log(result);

const addImageWithPromise = imgSrc => {
  const p = new Promise((resolve, reject) => {
    const imageElem = document.createElement('img');
    imageElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imageElem);

    const onImageLoaded = () => {
      const { width, height } = imageElem;
      resolve({ width, height });
    };
    imageElem.addEventListener('load', onImageLoaded);

    imageElem.addEventListener('error', () => reject(new Error('ho it is imposible')));
  });
  return p;
};

const resultPromise = addImageWithPromise(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
);

resultPromise.then(data => console.log(data));
// resultPromise.catch(error => console.log(error));

console.log(resultPromise);
