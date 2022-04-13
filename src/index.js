// write your code here


// function fetch(url) {
//   return fetch(url)
//     .then(resp => resp.json())
// }
// fetch("http://localhost:3000/ramens")


const form = document.querySelector("form")
form.addEventListener("submit", formAction)

function formAction(e) {
  e.preventDefault()
  const menu = document.querySelector("#ramen-menu");
  const menuImg = document.createElement("img")
  console.log(menuImg)
  // menu.append(menuImg)
  document.querySelector(".name")
    .innerText = e.target[0].value;
  document.querySelector(".restaurant")
    .innerText = e.target[1].value;
  // const img = document.querySelector(".detail-image")
  // 
  document.querySelector("#rating-display")
    .innerText = e.target[3].value;
  document.querySelector("#comment-display")
    .innerText = e.target[4].value;
  // menu.append(img)
}
