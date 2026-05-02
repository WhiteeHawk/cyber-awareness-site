exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { user_id, score, total } = JSON.parse(event.body);

    if (!user_id || score === undefined || !total) {
      return { statusCode: 400, body: JSON.stringify({ error: "بيانات ناقصة" }) };
    }

    const res = await fetch(`${process.env.SUPABASE_URL}/rest/v1/scenario_results`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": process.env.SUPABASE_SECRET_KEY,
        "Authorization": `Bearer ${process.env.SUPABASE_SECRET_KEY}`,
        "Prefer": "return=minimal"
      },
      body: JSON.stringify({ user_id, score, total })
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(err);
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};
