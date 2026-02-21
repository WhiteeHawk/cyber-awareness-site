
const scenes = [
  {
    title: "رسالة واتساب تقول: (ربحت جائزة من البنك! اضغط هنا)",
    desc: "وش التصرف الصحيح؟",
    options: [
      { text: "أضغط الرابط فورًا لأنه من بنك", correct: false },
      { text: "أتأكد من موقع البنك الرسمي أولًا", correct: true },
    ],
    tip: "العروض المفاجئة عبر الرسائل غالبًا احتيال — افحص المصدر دائمًا."
  },
  {
    title: "موظف دعم يطلب رمز تحقق (OTP) من حسابك",
    desc: "هل ترسله؟",
    options: [
      { text: "أكيد، هو موظف رسمي", correct: false },
      { text: "أرفض وأبلغ البنك مباشرة", correct: true },
    ],
    tip: "الموظف الحقيقي لا يطلب رموز أو كلمات مرور."
  },
  {
    title: "زميل أرسل لك ملف غريب بالبريد وقال: (افتح بسرعة!)",
    desc: "وش تسوي؟",
    options: [
      { text: "أفتحه فورًا", correct: false },
      { text: "أتأكد منه أو أفحص الملف قبل الفتح", correct: true },
    ],
    tip: "افحص الملفات الغريبة بمضاد الفيروسات حتى لو كانت من معارفك."
  }
];


const titleEl = document.getElementById("sceneTitle");
const descEl = document.getElementById("sceneDesc");
const actionsEl = document.getElementById("sceneActions");
const resultEl = document.getElementById("sceneResult");

let index = 0;


function renderScene() {
  const s = scenes[index];
  titleEl.textContent = s.title;
  descEl.textContent = s.desc;
  resultEl.textContent = "";
  actionsEl.innerHTML = "";

  s.options.forEach(op => {
    const btn = document.createElement("button");
    btn.className = "btn outline";
    btn.textContent = op.text;
    btn.onclick = () => handleChoice(op.correct, s.tip);
    actionsEl.appendChild(btn);
  });
}


function handleChoice(isCorrect, tip) {
  resultEl.textContent = isCorrect
    ? `✅ تصرف صحيح! ${tip}`
    : `❌ خطأ! ${tip}`;

  
  if (index < scenes.length - 1) {
    setTimeout(() => {
      index++;
      renderScene();
    }, 2500);
  } else {
    setTimeout(() => {
      resultEl.innerHTML = "🎉 أنهيت كل السيناريوهات بنجاح!";
    }, 2500);
  }
}


renderScene();