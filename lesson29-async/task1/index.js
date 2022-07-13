// addImage
/*
const buttonElem = document.querySelector('#button');

buttonElem.addEventListener('click', () => console.log('Click me'));

let sum = 0;
const startTime = new Date();

for (let i = 0; i < 1e9; i++) {
  sum += i;
}

const endTime = new Date();
console.log(`Cycle took ${endTime - startTime}ms`);
*/

const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement('img');
  const containerElem = document.querySelector('.page');

  imgElem.setAttribute('alt', 'My photo');
  imgElem.src = imgSrc;

  containerElem.append(imgElem);

  const onImageLoaded = () => {
    const { width, height } = imgElem;
    callback(null, { width, height });
  };

  imgElem.addEventListener('load', onImageLoaded);
  imgElem.addEventListener('error', () => 'Image load fail');
};

const imgSrc =
  'https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/illustration-window.pn';

const onImageLoaded = (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const { width, height } = data;
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width} x ${height}`;
};
addImage(imgSrc, onImageLoaded);
