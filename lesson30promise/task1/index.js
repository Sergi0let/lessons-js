const addImageWithPromise = imgSrc => {
  const p = new Promise((resolveCb, rejectCb) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My photo');
    const containerElem = document.querySelector('.page');
    imgElem.src = imgSrc;
    containerElem.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolveCb({ width, height });
    };

    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () => rejectCb(new Error('Image load fail')));
  });
  return p;
};

const imgSrc =
  'https://gromcode.s3.eu-central-1.aazonaws.com/front-end/html-css/lesson24/hw1/illustration-window.png';

const result = addImageWithPromise(imgSrc);
console.log(result);
