
// عناصر الصفحة
const lengthInput = document.getElementById("lengthInput");
const genBtn = document.getElementById("genBtn");
const copyBtn = document.getElementById("copyBtn");
const passwordBox = document.getElementById("passwordBox");

const checkInput = document.getElementById("checkInput");
const strengthBox = document.getElementById("strengthBox");

// مجموعة رموز التوليد
const charset =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?/[]{}~";

// توليد كلمة مرور
if (genBtn) {
  genBtn.addEventListener("click", () => {
    const len = Math.max(6, Math.min(40, Number(lengthInput.value) || 12));
    let pass = "";
    for (let i = 0; i < len; i++) {
      pass += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    passwordBox.textContent = pass;
  });
}

// نسخ كلمة المرور
if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    const pass = passwordBox?.textContent?.trim();
    if (pass && pass !== "—") {
      navigator.clipboard.writeText(pass);
      copyBtn.textContent = "✅ تم النسخ";
      setTimeout(() => (copyBtn.textContent = "نسخ"), 1200);
    }
  });
}

// 🔹 فحص قوة كلمة المرور
if (checkInput) {
  checkInput.addEventListener("input", () => {
    const val = checkInput.value;
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    const levels = ["ضعيفة ❌", "متوسطة ⚠️", "جيدة ✅", "قوية جدًا 🟢"];
    strengthBox.textContent = val
      ? `القوة: ${levels[Math.min(score, 3)]}`
      : "—";
  });
}