// Page loader only works if loader exists on the page
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.classList.add("hide");
    }, 700);
  }
});

// Countdown only works if countdown exists on the page
const countdown = document.getElementById("countdown");

if (countdown) {
  // Date only countdown. Time will not be shown on the website.
  const weddingDate = new Date("July 10, 2026 00:00:00").getTime();

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const eventMessage = document.getElementById("eventMessage");

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
      countdown.style.display = "none";

      if (eventMessage) {
        eventMessage.innerText = "The wedding day has arrived. Thank you!";
      }

      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor(
      (distance % (1000 * 60)) / 1000
    );

    if (daysEl) daysEl.innerText = formatTime(days);
    if (hoursEl) hoursEl.innerText = formatTime(hours);
    if (minutesEl) minutesEl.innerText = formatTime(minutes);
    if (secondsEl) secondsEl.innerText = formatTime(seconds);
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
}