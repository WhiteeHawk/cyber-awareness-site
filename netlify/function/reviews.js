exports.handler = async (event) => {
  const headers = { "Content-Type": "application/json" };
  const base = process.env.SUPABASE_URL;
  const secret = process.env.SUPABASE_SECRET_KEY;

  /* ── GET: جلب المراجعات ── */
  if (event.httpMethod === "GET") {
    try {
      const res = await fetch(
        `${base}/rest/v1/reviews?order=created_at.desc&limit=50`,
        {
          headers: {
            "apikey": secret,
            "Authorization": `Bearer ${secret}`
          }
        }
      );
      const data = await res.json();
      return { statusCode: 200, headers, body: JSON.stringify(Array.isArray(data) ? data : []) };
    } catch (e) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: e.message }) };
    }
  }

  /* ── POST: حفظ مراجعة جديدة ── */
  if (event.httpMethod === "POST") {
    try {
      const { user_id, username, rating, comment } = JSON.parse(event.body);

      if (!user_id || !username || !rating || !comment) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: "بيانات ناقصة" }) };
      }
      if (rating < 1 || rating > 5) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: "التقييم يجب أن يكون بين 1 و 5" }) };
      }
      if (comment.trim().length < 10) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: "التعليق قصير جداً" }) };
      }

      /* تحقق إن المستخدم ما راجع قبل */
      const checkRes = await fetch(
        `${base}/rest/v1/reviews?user_id=eq.${user_id}&limit=1`,
        { headers: { "apikey": secret, "Authorization": `Bearer ${secret}` } }
      );
      const existing = await checkRes.json();
      if (Array.isArray(existing) && existing.length > 0) {
        return { statusCode: 409, headers, body: JSON.stringify({ error: "سبق وأضفت مراجعة" }) };
      }

      const res = await fetch(`${base}/rest/v1/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": secret,
          "Authorization": `Bearer ${secret}`,
          "Prefer": "return=representation"
        },
        body: JSON.stringify({ user_id, username, rating, comment: comment.trim() })
      });

      const saved = await res.json();
      if (!res.ok) throw new Error(JSON.stringify(saved));

      return { statusCode: 200, headers, body: JSON.stringify({ success: true, review: saved[0] }) };
    } catch (e) {
      return { statusCode: 500, headers, body: JSON.stringify({ error: e.message }) };
    }
  }

  return { statusCode: 405, headers, body: JSON.stringify({ error: "Method Not Allowed" }) };
};
