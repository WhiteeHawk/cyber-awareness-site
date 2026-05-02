(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header.nav");
    const navInner = document.querySelector(".nav-inner");
    const linksNav = document.querySelector("nav.links") || document.getElementById("navLinks");
    if (!navInner || !linksNav) return;

    // 1) Ensure mobile toggle exists (some pages don't have it)
    let toggleBtn =
      document.querySelector(".menu-toggle") ||
      document.getElementById("menuToggle");

    if (!toggleBtn) {
      toggleBtn = document.createElement("button");
      toggleBtn.className = "menu-toggle";
      toggleBtn.type = "button";
      toggleBtn.id = "menuToggle";
      toggleBtn.textContent = "☰";
      toggleBtn.setAttribute("aria-label", "فتح/إغلاق القائمة");
      toggleBtn.setAttribute("aria-expanded", "false");

      // insert button before the nav links
      navInner.insertBefore(toggleBtn, linksNav);
    }

    // helper: is mobile breakpoint active (same as CSS 860px)
    const isMobile = () => window.matchMedia("(max-width: 860px)").matches;

    // 2) Toggle menu open/close
    const openMenu = () => {
      linksNav.classList.add("show");
      toggleBtn.setAttribute("aria-expanded", "true");
    };

    const closeMenu = () => {
      linksNav.classList.remove("show");
      toggleBtn.setAttribute("aria-expanded", "false");
    };

    const toggleMenu = () => {
      if (linksNav.classList.contains("show")) closeMenu();
      else openMenu();
    };

    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close when clicking on any link (mobile)
    linksNav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        if (isMobile()) closeMenu();
      });
    });

    // Close when clicking outside (mobile)
    document.addEventListener("click", (e) => {
      if (!isMobile()) return;
      const clickedInside =
        header?.contains(e.target) || linksNav.contains(e.target);
      if (!clickedInside) closeMenu();
    });

    // Close if resized to desktop
    window.addEventListener("resize", () => {
      if (!isMobile()) closeMenu();
    });

    // 3) Auto active link highlight based on current page
    try {
      const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();

      const allLinks = linksNav.querySelectorAll("a[href]");
      allLinks.forEach((a) => a.classList.remove("active"));

      let matched = null;
      allLinks.forEach((a) => {
        const href = (a.getAttribute("href") || "").toLowerCase().trim();
        if (!href) return;

        // match exact file (index.html, learn.html, ...)
        if (href === path) matched = a;

        // also allow index fallback ("/" or empty)
        if ((path === "" || path === "/") && href.includes("index.html")) matched = a;
      });

      // If nothing matched, keep existing active (if any), otherwise do nothing
      if (matched) matched.classList.add("active");
    } catch (err) {
      // silent fail (no need to break the site)
    }
    function showMessage() {
    document.getElementById("workMessage").style.display = "block";
}

  });
})();


/* ── Auth Nav Button ── */
(function(){
  const SUPA_URL = "https://qgsilbwwcqajzvysdbzi.supabase.co";
  const SUPA_KEY = "sb_publishable_JPT2bktJ6n7vGEUSsCaaRA_gQAaq2yb";

  async function getSession(){
    try {
      const r = await fetch(`${SUPA_URL}/auth/v1/user`, {
        headers: { "apikey": SUPA_KEY, "Authorization": "Bearer " + (localStorage.getItem("sb-session") || "") }
      });
      return r.ok ? await r.json() : null;
    } catch { return null; }
  }

  function updateAuthBtn(user){
    const btns = document.querySelectorAll(".auth-nav-btn");
    btns.forEach(btn => {
      if(user){
        btn.textContent = "👤 ملفي";
        btn.href = "profile.html";
        btn.style.borderColor = "rgba(124,240,214,.45)";
        btn.style.background  = "rgba(124,240,214,.12)";
        btn.style.color       = "var(--accent2)";
      } else {
        btn.textContent = "🔑 دخول";
        btn.href = "auth.html";
      }
    });
  }

  document.addEventListener("DOMContentLoaded", async () => {
    // أضف الزر لكل navbar
    document.querySelectorAll("nav.links").forEach(nav => {
      const existing = nav.querySelector(".auth-nav-btn");
      if(existing) return;
      const a = document.createElement("a");
      a.className = "auth-nav-btn";
      a.href = "auth.html";
      a.textContent = "🔑 دخول";
      a.style.cssText = "padding:8px 14px;border-radius:999px;border:1px solid rgba(106,166,255,.35);background:rgba(106,166,255,.1);color:var(--accent);font-weight:600;font-size:13px;transition:.2s;";
      nav.appendChild(a);
    });

    // تحقق من الجلسة عبر Supabase
    const sbSession = localStorage.getItem("sb-qgsilbwwcqajzvysdbzi-auth-token");
    if(sbSession){
      try {
        const parsed = JSON.parse(sbSession);
        if(parsed?.user) updateAuthBtn(parsed.user);
      } catch {}
    }
  });
})();