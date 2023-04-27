let tomorrow = new Date("2023-04-28T09:30").getTime();

const reload = setInterval(function () {
    let now = new Date().getTime();
    let timeLeft = tomorrow - now;

	let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

	document.querySelector(".days").innerHTML = days + "d:";

	document.querySelector(".hours").innerHTML = hours + "h:";

	document.querySelector(".minutes").innerHTML = minutes + "m:";

	document.querySelector(".seconds").innerHTML = seconds + "s";
    
    if (timeLeft < 0) {
        clearInterval(reload);
    }

}, 1000);

