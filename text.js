let wheel = document.querySelector(".mainWheel");
let hour = document.querySelector(".hourHand");
let minute = document.querySelector(".minuteHand");

setInterval(() => {
  let dateNow = new Date().getSeconds();
  let getHour = new Date().getHours();
  let getMinute = new Date().getMinutes();

  wheel.style.transform = `rotate(${dateNow * 6}deg) translate(33px, -110px)`;
  minute.style.transform = `rotate(${
    getMinute * 6
  }deg) translate(54px, -125px)`;
  hour.style.transform = `rotate(${getHour * 30}deg) translate(54px, -101px)`;
}, 1000);
