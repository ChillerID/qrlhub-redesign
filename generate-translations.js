import fs from "fs/promises";

const MODEL = "qwen3:8b";
const BASE_URL = "http://localhost:11434/api/generate";

const languages = [
  { code: "ar", label: "العربية" },
  { code: "id", label: "Bahasa Indonesia" },
  { code: "ms", label: "Bahasa Melayu" },
  { code: "cs", label: "Čeština" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "it", label: "Italiano" },
  { code: "nl", label: "Nederlands" },
  { code: "pl", label: "Polski" },
  { code: "pt", label: "Português" },
  { code: "ru", label: "Русский" },
  { code: "fi", label: "Suomi" },
  { code: "th", label: "ไทย" },
  { code: "tr", label: "Türkçe" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "zh", label: "中文" },
  { code: "zh-TW", label: "繁體中文" },
];

async function translateJSON(sourceJSON, languageLabel) {
  const prompt = `
Translate the following JSON into ${languageLabel}.
Return ONLY valid JSON.
No explanations.
No markdown.
No commentary.

JSON:
${JSON.stringify(sourceJSON, null, 2)}
`;

  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: MODEL,
      prompt,
      stream: false,
      options: { temperature: 0.2 },
    }),
  });

  const data = await response.json();

  if (!data.response) {
    throw new Error("Empty model response");
  }

  const raw = data.response.trim();

  // Extract JSON safely
  const firstBrace = raw.indexOf("{");
  const lastBrace = raw.lastIndexOf("}");

  if (firstBrace === -1 || lastBrace === -1) {
    console.log("Invalid model output:");
    console.log(raw);
    throw new Error("No JSON found in model response");
  }

  const jsonString = raw.substring(firstBrace, lastBrace + 1);

  return JSON.parse(jsonString);
}

// ✅ THIS WAS MISSING
async function run() {
  try {
    const source = JSON.parse(
      await fs.readFile("./public/locales/en.json", "utf-8")
    );

    await fs.mkdir("./public/locales", { recursive: true });

    for (const lang of languages) {
      try {
        console.log(`🌍 Translating ${lang.code}...`);
        const translated = await translateJSON(source, lang.label);

        await fs.writeFile(
          `./public/locales/${lang.code}.json`,
          JSON.stringify(translated, null, 2)
        );

        console.log(`✅ Saved ${lang.code}.json`);
      } catch (err) {
        console.log(`❌ Failed ${lang.code}`);
        console.log(err.message);
      }
    }

    console.log("🎉 All translations complete.");
  } catch (err) {
    console.error("Fatal error:", err);
  }
}

run();