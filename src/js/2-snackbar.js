import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const inputEL = document.querySelector("input");
const formEl = document.querySelector("form");


function client (event) {
  event.preventDefault();
  const delay = inputEL.value;
  const status = event.target.elements.state.value;

  const statusPromis = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === "fulfilled") {
        resolve(delay);
      }
      else {
        reject(delay);
      }
    }, delay);
  });

  statusPromis
  .then(delay => {
    iziToast.success({ 
      title: "Ok",
      titleColor: "#ffffff",
      message: `Fulfilled promise in ${delay}ms`,
      messageColor: "#ffffff",
      backgroundColor: "#59a10d",
    })
  })
  .catch(delay => {
  iziToast.error({
      title: "Error",
      titleColor: "#ffffff",
      message: `Rejected promise in ${delay}ms`,
      messageColor: "#ffffff",
      backgroundColor: "#ef4040",
    })
  })
}

formEl.addEventListener("submit", client);
