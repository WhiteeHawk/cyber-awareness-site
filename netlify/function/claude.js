exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { serviceName } = JSON.parse(event.body);

    const prompt = `أنت خبير في تحليل سياسات الخصوصية. حلّل: "${serviceName}". أجب بـ JSON فقط:
{"name":"الاسم الرسمي","emoji":"إيموجي","category":"التصنيف","privacy_score":رقم1-5,"score_color":"#hex","summary":"ملخص 2-3 جمل","pros":["إيجابية1","إيجابية2","إيجابية3"],"cons":["تحذير1","تحذير2","تحذير3"],"tip":"نصيحة عملية","official_url":"رابط السياسة"}`;

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 800,
        messages: [{ role: "user", content: prompt }]
      })
    });

    const data = await res.json();
    const raw = data.content?.map(b => b.text || "").join("") || "";
    const match = raw.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("no json");

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: match[0]
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message })
    };
  }
};
