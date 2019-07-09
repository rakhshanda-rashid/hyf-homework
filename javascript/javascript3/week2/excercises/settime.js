/*resolve after 5 sec*/
let promise1 = new Promise(function(resolve) {
    setTimeout(function () {
        resolve('I am called asynchronously after 5 seconds');
    }, 5000);
});
promise1.then(function (result) {
    console.log(result);
})

/*rewrite set time*/
function setTimeOut(resolveAfter) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve("I am called asynchrounously after" +" "+ resolveAfter +" "+ "seconds");
        }, resolveAfter * 1000);
    })
}
setTimeOut(3).then(function(resolveValue) {
    console.log(resolveValue);
})

/*Rewrite geolocation */
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition((position) => {
                resolve(position);

            }, (errmsg) => {
                reject(errmsg)
            })

        } else {
            reject();
        }
    });
}
getCurrentLocation().then((position) => {
    console.log(position);
}).catch((error) => {
    console.log(error);
})

//fetch and waiting
fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json())
  .then(dogs => {
    console.log(dogs);
    return new Promise(function(resolve) {
      setTimeout(() => { 
          resolve(dogs); 
        }, 3000);
    });
  })
  .then(function(dogs) {
    console.log(dogs.message);
    console.log(dogs.status);
  });





