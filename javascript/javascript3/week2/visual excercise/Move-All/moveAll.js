function translateAllAtOnce() {
    let promiseOneRed = moveElement(document.querySelector('.marks > li:nth-child(1)'), {x: 20, y: 300});
    let promiseTwoBlue = moveElement(document.querySelector('.marks > li:nth-child(2)'), {x: 400, y: 300});
    let promiseThreeGreen = moveElement(document.querySelector('.marks > li:nth-child(3)'), {x: 400, y: 20});

    let RGBPromises = Promise.all([promiseOneRed, promiseTwoBlue, promiseThreeGreen]);
    
    RGBPromises 
      .then(() => {
        console.log("all items have been moved");
      })
      .catch(() => {
          console.log("Failed");
      })
}

translateAllAtOnce();