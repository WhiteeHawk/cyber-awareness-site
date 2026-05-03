(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const header   = document.querySelector("header.nav");
    const navInner = document.querySelector(".nav-inner");
    const linksNav = document.querySelector("nav.links") || document.getElementById("navLinks");
    if (!navInner || !linksNav) return;

    /* ── زر الهامبرغر للجوال ── */
    let toggleBtn = document.querySelector(".menu-toggle") || document.getElementById("menuToggle");
    if (!toggleBtn) {
      toggleBtn = document.createElement("button");
      toggleBtn.className = "menu-toggle";
      toggleBtn.type = "button";
      toggleBtn.id   = "menuToggle";
      toggleBtn.textContent = "☰";
      toggleBtn.setAttribute("aria-label", "فتح/إغلاق القائمة");
      toggleBtn.setAttribute("aria-expanded", "false");
      navInner.insertBefore(toggleBtn, linksNav);
    }

    const isMobile  = () => window.matchMedia("(max-width:860px)").matches;
    const openMenu  = () => { linksNav.classList.add("show");    toggleBtn.setAttribute("aria-expanded","true");  toggleBtn.textContent = "✕"; };
    const closeMenu = () => { linksNav.classList.remove("show"); toggleBtn.setAttribute("aria-expanded","false"); toggleBtn.textContent = "☰"; };
    const toggleMenu= () => linksNav.classList.contains("show") ? closeMenu() : openMenu();

    toggleBtn.addEventListener("click", e => { e.stopPropagation(); toggleMenu(); });
    linksNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { if (isMobile()) closeMenu(); }));
    document.addEventListener("click", e => {
      if (!isMobile()) return;
      if (!header?.contains(e.target) && !linksNav.contains(e.target)) closeMenu();
    });
    window.addEventListener("resize", () => { if (!isMobile()) closeMenu(); });

    /* ── رابط نشط ── */
    try {
      const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
      const allLinks = linksNav.querySelectorAll("a[href]");
      allLinks.forEach(a => a.classList.remove("active"));
      let matched = null;
      allLinks.forEach(a => {
        const href = (a.getAttribute("href") || "").toLowerCase().trim();
        if (!href) return;
        if (href === path) matched = a;
        if ((path === "" || path === "/") && href.includes("index.html")) matched = a;
      });
      if (matched) matched.classList.add("active");
    } catch {}
  });

})();


/* ══════════════════════════════════════════
   زر الدخول / اسم المستخدم في الـ Navbar
   يعمل على كل الصفحات تلقائياً
══════════════════════════════════════════ */
(function(){

  /* ── جلب Config من الـ Function ── */
  let _sb = null;
  async function getSB(){
    if (_sb) return _sb;
    try {
      const res = await fetch("/.netlify/functions/get-config");
      if (!res.ok) return null;
      const { url, key } = await res.json();
      if (!url || !key) return null;
      _sb = window.supabase ? window.supabase.createClient(url, key) : null;
      return _sb;
    } catch { return null; }
  }

  /* ── تحديث الزر ── */
  function updateBtn(user, profile){
    document.querySelectorAll(".auth-nav-btn").forEach(btn => {
      if (user) {
        /* لو عنده اسم مستخدم حطه، وإلا الجزء قبل @ من الإيميل */
        const name = profile?.username || user.email?.split("@")[0] || "حسابي";
        const initial = name[0]?.toUpperCase() || "؟";
        btn.innerHTML = `<span class="auth-avatar">${initial}</span><span class="auth-uname">${name}</span>`;
        btn.href      = "profile.html";
        btn.classList.add("logged-in");
      } else {
        btn.innerHTML = "تسجيل الدخول";
        btn.href      = "auth.html";
        btn.classList.remove("logged-in");
      }
    });
  }

  /* ── أضف الزر لكل navbar ── */
  function injectBtn(){
    document.querySelectorAll("nav.links").forEach(nav => {
      if (nav.querySelector(".auth-nav-btn")) return;
      const a = document.createElement("a");
      a.className = "auth-nav-btn";
      a.href      = "auth.html";
      a.innerHTML = "تسجيل الدخول";
      nav.appendChild(a);
    });
  }

  /* ── Main ── */
  document.addEventListener("DOMContentLoaded", async () => {
    injectBtn();

    /* أولاً: تحقق من localStorage بدون انتظار الـ API */
    const PROJECT_ID = "npkhaqzxkyyhduthqkwb";
    const raw = localStorage.getItem(`sb-${PROJECT_ID}-auth-token`);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (parsed?.user) updateBtn(parsed.user, null);
      } catch {}
    }

    /* ثانياً: تحقق رسمياً من الجلسة */
    const sb = await getSB();
    if (!sb) return;

    const { data: { session } } = await sb.auth.getSession();
    if (!session) { updateBtn(null, null); return; }

    const user = session.user;

    /* جلب اسم المستخدم من profiles */
    const { data: profileArr } = await sb
      .from("profiles")
      .select("username")
      .eq("id", user.id)
      .limit(1);

    const profile = profileArr?.[0] || null;
    updateBtn(user, profile);
  });

})();