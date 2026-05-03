// netlify/functions/save-contact.js
const { createClient } = require("@supabase/supabase-js");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let body;
  try { body = JSON.parse(event.body); }
  catch { return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) }; }

  const { name, email, subject, message, type } = body;
  if (!name || !email || !message)
    return { statusCode: 400, body: JSON.stringify({ error: "بيانات ناقصة" }) };

  const SUPABASE_URL    = process.env.SUPABASE_URL;
  const SUPABASE_SECRET = process.env.SUPABASE_SECRET_KEY;
  const RESEND_API_KEY  = process.env.RESEND_API_KEY;

  // 1. حفظ في Supabase
  try {
    const sb = createClient(SUPABASE_URL, SUPABASE_SECRET);
    await sb.from("contact_messages").insert({
      name, email,
      subject: subject || "—",
      message,
      type: type || "استفسار"
    });
  } catch(e) { console.error("Supabase error:", e.message); }

  // 2. إرسال إيميل بـ Resend
  if (RESEND_API_KEY) {
    try {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from:     "سايف ديجيتال <noreply@safedigital.space>",
          to:       ["AbdulelahMutlaq@gmail.com"],
          reply_to: email,
          subject:  `[سايف ديجيتال] ${type || "رسالة"}: ${subject || name}`,
          html: `
            <div dir="rtl" style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0d1b38;color:#e8eaf6;border-radius:16px;overflow:hidden;">
              <div style="background:linear-gradient(135deg,#6aa6ff,#7cf0d6);padding:24px 28px;">
                <h2 style="margin:0;color:#fff;font-size:20px;">رسالة جديدة — سايف ديجيتال</h2>
              </div>
              <div style="padding:28px;">
                <table style="width:100%;border-collapse:collapse;">
                  <tr>
                    <td style="padding:8px 0;color:#a9b3d6;width:120px;">النوع</td>
                    <td style="padding:8px 0;">
                      <span style="background:rgba(106,166,255,.2);color:#6aa6ff;padding:3px 10px;border-radius:999px;font-size:13px;">${type || "استفسار"}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;color:#a9b3d6;">الاسم</td>
                    <td style="padding:8px 0;font-weight:700;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;color:#a9b3d6;">البريد</td>
                    <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#6aa6ff;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;color:#a9b3d6;">الموضوع</td>
                    <td style="padding:8px 0;">${subject || "—"}</td>
                  </tr>
                </table>
                <div style="margin-top:20px;padding:16px;background:rgba(255,255,255,.05);border-radius:12px;border:1px solid rgba(106,166,255,.15);line-height:1.7;">
                  ${message.replace(/\n/g, "<br>")}
                </div>
                <p style="margin-top:20px;font-size:12px;color:#64748b;">
                  للرد مباشرة اضغط رد في بريدك — سيصل للمرسل تلقائياً.
                </p>
              </div>
            </div>
          `
        })
      });
      if (!emailRes.ok) console.error("Resend error:", await emailRes.text());
    } catch(e) { console.error("Email failed:", e.message); }
  }

  return { statusCode: 200, body: JSON.stringify({ success: true }) };
};