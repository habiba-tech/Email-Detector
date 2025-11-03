const emailInput = document.getElementById("emailInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  if (email === "") {
    result.innerHTML = "⚠️ Please enter an email address.";
    result.className = "suspicious";
    return;
  }

  // List of suspicious patterns (common fake domains)
  const suspiciousWords = ["amaz0n", "micr0soft", "paypa1", "gmai1", "yaho0", "supp0rt", "freegift"];
  const isSuspicious = suspiciousWords.some(word => email.toLowerCase().includes(word));

  if (isSuspicious) {
    result.innerHTML = "🚨 Suspicious Email Detected!";
    result.className = "suspicious";
  } else {
    result.innerHTML = "✅ This email looks safe!";
    result.className = "safe";
  }
});
