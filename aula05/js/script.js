"use strict"; // O javaScript acusa mais erros

window.addEventListener('load', () => {
  doFetch();
  doFetchAsync();
})

function doFetch() {
   fetch("https://apiii.github.com/users/rrgomide")
    .then(res => {
      res.json()
      .then(data => {
        console.log(data);
      })
    }).catch(error => {
      console.log(error.message);
      console.log("Um erro ocorreu na chamada da requisição");
    })
}

async function doFetchAsync() {
  let res = await fetch("https://api.github.com/users/rrgomide");
  let data = await res.json();
  console.log(data);
}

