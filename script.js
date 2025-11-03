const emailInput = document.getElementById("emailInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  result.className = "";

  if (!email) return show(" Enter an email!", "red");

  result.textContent = " Scanning...";
  setTimeout(() => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return show(" Invalid format!", "red");

    const domain = email.split("@")[1].toLowerCase();
    const safe = ["gmail.com","yahoo.com","outlook.com","hotmail.com"];
    const fake = ["amaz0n","paypa1","micr0soft","supp0rt","gmai1","freegift"];

    if (fake.some(w => email.includes(w))) show(" Suspicious Email!", "red");
    else if (safe.includes(domain)) show(" Safe Email", "green");
    else show(" Unknown Domain", "orange");
  }, 1500);
});

function show(msg, color) {
  result.textContent = msg;
  result.style.color = color;
  result.style.textShadow = `0 0 10px ${color}`;
}
