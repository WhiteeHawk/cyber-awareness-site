exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { user_id } = JSON.parse(event.body);
    const base = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SECRET_KEY;
    const headers = {
      "apikey": key,
      "Authorization": `Bearer ${key}`,
      "Content-Type": "application/json"
    };

    const [quizRes, scenarioRes, profileRes] = await Promise.all([
      fetch(`${base}/rest/v1/quiz_results?user_id=eq.${user_id}&order=created_at.desc&limit=10`, { headers }),
      fetch(`${base}/rest/v1/scenario_results?user_id=eq.${user_id}&order=created_at.desc&limit=10`, { headers }),
      fetch(`${base}/rest/v1/profiles?id=eq.${user_id}`, { headers })
    ]);

    const [quiz, scenarios, profile] = await Promise.all([
      quizRes.json(), scenarioRes.json(), profileRes.json()
    ]);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quiz, scenarios, profile: profile[0] || null })
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};
