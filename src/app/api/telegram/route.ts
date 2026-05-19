import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const image = formData.get("image") as File | null;
    const weight = formData.get("weight")?.toString() || "";
    const height = formData.get("height")?.toString() || "";
    const exerciseLevel = formData.get("exerciseLevel")?.toString() || "";
    const goal = formData.get("goal")?.toString() || "";

    const tgToken = process.env.TELEGRAM_BOT_TOKEN;
    const tgChatId = process.env.TELEGRAM_CHAT_ID;

    if (!tgToken || !tgChatId) {
      return NextResponse.json(
        { error: "Telegram credentials missing" },
        { status: 500 }
      );
    }

    const tgFormData = new FormData();
    tgFormData.append("chat_id", tgChatId);
    tgFormData.append(
      "caption",
      `New User Assessment\n\n` +
        `Weight: ${weight} kg\n` +
        `Height: ${height} cm\n` +
        `Level: ${exerciseLevel}\n` +
        `Goal: ${goal}`
    );

    if (image) {
      tgFormData.append("photo", image);
      await fetch(`https://api.telegram.org/bot${tgToken}/sendPhoto`, {
        method: "POST",
        body: tgFormData,
      });
    } else {
      await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: tgChatId,
          text: `New User Assessment\n\nWeight: ${weight} kg\nHeight: ${height} cm\nLevel: ${exerciseLevel}\nGoal: ${goal}`,
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Telegram route error:", error);
    return NextResponse.json(
      { error: "Failed to send Telegram message" },
      { status: 500 }
    );
  }
}