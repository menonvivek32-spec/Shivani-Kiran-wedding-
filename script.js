
/* RECEPTION DETAILS */
const reception = {
  date: "2026-12-24T16:00:00+05:30",
  venue: "Karuna Auditorium",
  time: "4:00 PM – 8:00 PM"
};

/* COUNTDOWN */
const receptionDate = new Date(reception.date);

const $ = (id) => document.getElementById(id);

function updateCountdown() {
  const diff = receptionDate.getTime() - Date.now();

  const days = $("days");
  const hours = $("hours");
  const minutes = $("minutes");
  const seconds = $("seconds");

  if (!days || !hours || !minutes || !seconds) return;

  if (diff <= 0) {
    days.textContent = "00";
    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";
    return;
  }

  days.textContent = Math.floor(diff / 86400000);
  hours.textContent = String(
    Math.floor((diff % 86400000) / 3600000)
  ).padStart(2, "0");

  minutes.textContent = String(
    Math.floor((diff % 3600000) / 60000)
  ).padStart(2, "0");

  seconds.textContent = String(
    Math.floor((diff % 60000) / 1000)
  ).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* BACKGROUND MUSIC */
const music = $("weddingMusic");
const musicButton = $("musicButton");
const musicLabel = $("musicLabel");

if (music && musicButton && musicLabel) {
  musicButton.addEventListener("click", async () => {
    if (music.paused) {
      try {
        await music.play();
        musicButton.setAttribute("aria-pressed", "true");
        musicLabel.textContent = "PAUSE MUSIC";
      } catch (error) {
        musicLabel.textContent = "ADD MUSIC FILE";
      }
    } else {
      music.pause();
      musicButton.setAttribute("aria-pressed", "false");
      musicLabel.textContent = "PLAY MUSIC";
    }
  });
}
