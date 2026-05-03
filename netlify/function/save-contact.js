// netlify/functions/save-contact.js
exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  // EmailJS يرسل الإيميل من الـ frontend مباشرة
  // هذه الـ function للحفظ في Supabase فقط عبر REST API بدون SDK
  let body;
  try { body = JSON.parse(event.body); }
  catch { return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) }; }

  const { name, email, subject, message, type } = body;
  if (!name || !email || !message)
    return { statusCode: 400, body: JSON.stringify({ error: "بيانات ناقصة" }) };

  const SUPABASE_URL    = process.env.SUPABASE_URL;
  const SUPABASE_SECRET = process.env.SUPABASE_SECRET_KEY;

  try {
    await fetch(`${SUPABASE_URL}/rest/v1/contact_messages`, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_SECRET,
        "Authorization": `Bearer ${SUPABASE_SECRET}`,
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
      },
      body: JSON.stringify({ name, email, subject: subject || "—", message, type: type || "استفسار" })
    });
  } catch(e) { console.error("Supabase error:", e.message); }

  return { statusCode: 200, body: JSON.stringify({ success: true }) };
};