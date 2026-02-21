

const questions = [
  {
    q: "وصلك إيميل يقول: (حسابك بيتقفل خلال ساعة) ومعه رابط تسجيل دخول. وش أفضل تصرف؟",
    a: ["أضغط الرابط بسرعة وأدخل", "أدخل من موقع الخدمة الرسمي يدويًا", "أرسل بياناتي للدعم"],
    correct: 1,
    tip: "رسائل الاستعجال علامة تصيّد. ادخل للموقع الرسمي يدويًا."
  },
  {
    q: "أفضل كلمة مرور؟",
    a: ["12345678", "A1b2!", "جملة طويلة وفريدة لكل حساب"],
    correct: 2,
    tip: "الأطول + الفريد أفضل. ويفضل استخدام مدير كلمات مرور."
  },
  {
    q: "التحقق الثنائي (MFA) يفيد لأنه:",
    a: ["يزيد سرعة الدخول", "يضيف طبقة حماية حتى لو انسرقت كلمة المرور", "يمنع التحديثات"],
    correct: 1,
    tip: "التحقق بخطوتين يقلل خطر الاختراق حتى لو كلمة المرور تسربت."
  },
  {
    q: "شبكة Wi‑Fi عامة باسم 'FreeAirportWiFi' بدون كلمة مرور. وش التصرف الصحيح؟",
    a: ["أسجل دخولي بالبنك عادي", "أتجنب العمليات الحساسة وأستخدم VPN إذا اضطرّيت", "أرسل ملفات مهمة"],
    correct: 1,
    tip: "الشبكات العامة قد تكون مراقبة أو مزيفة — استخدم VPN إذا اضطررت."
  },
  {
    q: "أي علامة تدل على رابط مشبوه؟",
    a: ["دومين غريب أو حروف مبدلة مثل paypa1.com", "وجود https فقط", "فيه اسم الشركة"],
    correct: 0,
    tip: "الدومين هو الأهم — لا تعتمد فقط على https أو تصميم الموقع."
  },
  {
    q: "أفضل سياسة للتحديثات؟",
    a: ["أحدث أول بأول", "ما أحدث أبدًا", "أحدث كل سنتين"],
    correct: 0,
    tip: "التحديثات تسد الثغرات قبل أن تُستغل."
  },
  {
    q: "وش معنى Password Reuse؟",
    a: ["تغيير كلمة المرور كثير", "استخدام نفس كلمة المرور في أكثر من موقع", "نسيان كلمة المرور"],
    correct: 1,
    tip: "إعادة استخدام كلمة المرور يعرض كل حساباتك للخطر إذا تسرّب أحدها."
  },
  {
    q: "إذا برنامج طلب صلاحية موقع/صور بدون سبب واضح:",
    a: ["أعطيه كل شيء", "أرفض أو أقلل الصلاحيات", "أرسل الصلاحيات لصديقي"],
    correct: 1,
    tip: "قلل الصلاحيات لأقل حد ممكن (مبدأ أقل امتياز)."
  },
  {
    q: "وصلك كود OTP من البنك، وشخص قال: (ارسل الكود للتأكيد).",
    a: ["أعطيه لأن اسمه بنك", "أرفض — OTP سرّي ولا يُطلب", "أرسله ثم أغير كلمة المرور لاحقًا"],
    correct: 1,
    tip: "OTP لا تُشاركها أبدًا حتى مع من يدّعي أنه من البنك."
  },
  {
    q: "وش أفضل طريقة لتخزين كلمات المرور؟",
    a: ["ملاحظات الجوال بدون قفل", "Password Manager موثوق + MFA", "ورقة تحت الكيبورد"],
    correct: 1,
    tip: "مدير كلمات المرور + التحقق الثنائي أكثر أمانًا وسهولة."
  }
];

// عناصر HTML
const qText = document.getElementById("qText");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("nextBtn");
const skipBtn = document.getElementById("skipBtn");
const progressPill = document.getElementById("progressPill");
const quizBox = document.getElementById("quizBox");
const resultBox = document.getElementById("resultBox");
const scoreText = document.getElementById("scoreText");
const adviceBox = document.getElementById("adviceBox");
const restartBtn = document.getElementById("restartBtn");

// متغيرات التحكم
let idx = 0;
let score = 0;
let answered = false;
let missedTips = [];

// 🔹 عرض السؤال الحالي
function render() {
  const total = questions.length;
  const cur = questions[idx];

  progressPill.textContent = `السؤال ${idx + 1} / ${total}`;
  qText.textContent = cur.q;
  choicesEl.innerHTML = "";

  answered = false;
  nextBtn.disabled = true;

  cur.a.forEach((txt, i) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.type = "button";
    btn.textContent = txt;
    btn.addEventListener("click", () => pick(i));
    choicesEl.appendChild(btn);
  });
}

// 🔹 اختيار إجابة
function pick(i) {
  if (answered) return;
  answered = true;
  nextBtn.disabled = false;

  const cur = questions[idx];
  const nodes = Array.from(choicesEl.querySelectorAll(".choice"));

  nodes.forEach((n, j) => {
    n.disabled = true;
    if (j === cur.correct) n.classList.add("correct");
    if (j === i && i !== cur.correct) n.classList.add("wrong");
  });

  if (i === cur.correct) {
    score++;
  } else {
    missedTips.push(`• ${cur.tip}`);
  }
}

// 🔹 التالي
function next() {
  idx++;
  idx < questions.length ? render() : finish();
}

// 🔹 تخطي
function skip() {
  const cur = questions[idx];
  missedTips.push(`• ${cur.tip}`);
  next();
}

// 🔹 عرض النتيجة النهائية
function finish() {
  quizBox.style.display = "none";
  resultBox.style.display = "block";

  const total = questions.length;
  const percentage = Math.round((score / total) * 100);

  // تحديد مستوى النتيجة
  let level = "";
  if (score >= 9) level = "ممتاز جدًا 👑";
  else if (score >= 7) level = "جيد جدًا ✅";
  else if (score >= 5) level = "جيد 👌";
  else level = "يحتاج تقوية 💪";

  // نص النتيجة والتوصيات
  scoreText.textContent = `درجتك: ${score} / ${total} (${percentage}٪)`;
  const tips = missedTips.length
    ? missedTips.slice(0, 6).join("<br>")
    : "👏 ما شاء الله! إجاباتك ممتازة، ووعيك السيبراني عالي جدًا.";

  adviceBox.innerHTML = `<strong>${level}</strong><br><br>${tips}`;
}

// 🔹 إعادة التشغيل
function restart() {
  idx = 0;
  score = 0;
  missedTips = [];

  resultBox.style.display = "none";
  quizBox.style.display = "block";
  render();
}

// 🎬 تهيئة الأحداث
nextBtn.addEventListener("click", next);
skipBtn.addEventListener("click", skip);
restartBtn.addEventListener("click", restart);

// بدء الاختبار
render();