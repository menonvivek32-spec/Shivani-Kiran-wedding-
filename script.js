/* CUSTOMISE THE WEDDING DETAILS IN THIS OBJECT */
const wedding = {
  // Use local time in YYYY-MM-DDTHH:MM:SS format. Example: 2027-02-14T10:00:00
  date: "2026-12-23T10:30:00+05:30",
  dateLabel: "23 DECEMBER 2026 · 10:30 AM",
  venueName: "La Maria Castle",
  venueAddress: "12/240, Church Rd, Kechery, Eranellur, Kerala 680501",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=La+Maria+Castle%2C+12%2F240%2C+Church+Rd%2C+Kechery%2C+Eranellur%2C+Kerala+680501",
  // For real RSVP delivery, paste a Formspree endpoint here (see README).
  rsvpEndpoint: "https://formspree.io/f/moeeewry"
};
const $ = (id) => document.getElementById(id);
const prettyDate = new Date(wedding.date);
$('heroDate').textContent = wedding.dateLabel;
$('ceremonyDate').textContent = wedding.dateLabel;
$('venueName').textContent = wedding.venueName;
$('venueAddress').textContent = wedding.venueAddress;
$('mapLink').href = wedding.mapUrl;
function tick(){
  const diff = prettyDate.getTime() - Date.now();
  if (!Number.isFinite(diff)) return;
  if (diff <= 0){ ['days','hours','minutes','seconds'].forEach(id => $(id).textContent='00'); $('countdownNote').textContent='Today is the day — let the celebrations begin!'; return; }
  const values = {days:Math.floor(diff/86400000),hours:Math.floor(diff%86400000/3600000),minutes:Math.floor(diff%3600000/60000),seconds:Math.floor(diff%60000/1000)};
  Object.entries(values).forEach(([id,value]) => $(id).textContent=String(value).padStart(2,'0'));
}
tick(); setInterval(tick,1000);
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);} }),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const form = $('rsvpForm');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  if (!wedding.rsvpEndpoint) {
    const subject = encodeURIComponent(`Wedding RSVP — ${data.name}`);
    const body = encodeURIComponent(`Name: ${data.name}\nAttendance: ${data.attendance}\nGuests: ${data.guests}\nMessage: ${data.message || '(none)'}`);
    $('formNote').textContent = 'Your email app will open so you can send this RSVP. To receive replies automatically, configure Formspree in script.js.';
    // Replace with the host family's actual RSVP email before using this fallback.
    window.location.href = `mailto:REPLACE-WITH-FAMILY-EMAIL@example.com?subject=${subject}&body=${body}`;
    return;
  }
  const button = form.querySelector('button'); button.disabled = true; button.textContent = 'SENDING…';
  try {
    const response = await fetch(wedding.rsvpEndpoint,{method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},body:JSON.stringify(data)});
    if(!response.ok) throw new Error('Submission failed');
    form.reset(); $('formNote').textContent='Thank you! Your RSVP has been sent.';
  } catch(error) { $('formNote').textContent='Sorry, the RSVP could not be sent. Please try again or contact the family.'; }
  finally {button.disabled=false;button.innerHTML='SEND RSVP <span>↗</span>';}
});
const music = $('weddingMusic'), musicButton = $('musicButton');
musicButton.addEventListener('click', async () => {
  if (music.paused) {
    try { await music.play(); musicButton.setAttribute('aria-pressed','true'); $('musicLabel').textContent='PAUSE MUSIC'; }
    catch { $('musicLabel').textContent='ADD MUSIC FILE'; }
  } else { music.pause(); musicButton.setAttribute('aria-pressed','false'); $('musicLabel').textContent='PLAY MUSIC'; }
});
