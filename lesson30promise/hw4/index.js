const addImageV2 = url => {
  let p = new Promise((resolve, reject) => {
    const imageElem = document.createElement('img');
    imageElem.src = url;

    const containerElem = document.querySelector('.page');
    containerElem.append(imageElem);

    const onImageLoad = () => {
      const { width, height } = imageElem;
      resolve({ width, height });
    };
    imageElem.addEventListener('load', onImageLoad);
    imageElem.addEventListener('error', () => reject(new Error('Image not failed')));
  });
  return p;
};

// examples

addImageV2('https://server.com/image.png')
  .then(data => console.log(data)) // ==> { width: 200, height: 100 }
  .catch(error => console.log(error)); // ==> 'Image load failed'
