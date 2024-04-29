const bottomButton = document.querySelector(".bottomButton");
const adviceId = document.getElementById("adviceId");
const quote = document.querySelector(".quote");

let showQuote = function () {
  const timestamp = new Date().getTime();
  console.log(timestamp);
  const url = `https://api.adviceslip.com/advice?timestamp=${timestamp}`;
  fetch(url)
    .then((response) => {
      bottomButton.classList.add("rotate");
      bottomButton.disabled = true;
      setTimeout(function () {
        bottomButton.classList.remove("rotate");
        bottomButton.disabled = false;
      }, 3000);
      return response.json();
    })
    .then((data) => data.slip)
    .then(function (data) {
      adviceId.innerText = data.id;
      quote.innerText = data.advice;
      console.log(data);
    })
    .catch((error) => {
      alert(`Error ${error}`);
    });
};

bottomButton.addEventListener("click", showQuote);
