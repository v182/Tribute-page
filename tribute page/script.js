// AOS animations
AOS.init({ duration: 1200 });

// Form submission with emoji + avatar + time
const form = document.getElementById("tributeForm");
const messages = document.getElementById("messages");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form[0].value.trim();
  const msg = form[1].value.trim();
  if (name && msg) {
    const time = new Date().toLocaleTimeString();
    const avatar = name.slice(0, 2).toUpperCase();

    const li = document.createElement("li");
    li.innerHTML = `<span class="avatar">${avatar}</span><strong>${name}</strong> @ ${time}<br>${msg}`;
    messages.prepend(li);

    form.reset();
  }
});

// Smooth scroll when play icon is clicked
function scrollToQuote() {
  document.getElementById("quote").scrollIntoView({ behavior: "smooth" });
}
