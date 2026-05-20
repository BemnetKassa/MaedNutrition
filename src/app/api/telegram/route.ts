import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const image = formData.get("image") as File | null;
    const receipt = formData.get("receipt") as File | null;
    const name = formData.get("name")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const telegram = formData.get("telegram")?.toString() || "";
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

    const caption =
      `${name ? name : "New User"} Assessment\n\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `Telegram: ${telegram}\n` +
      `Weight: ${weight} kg\n` +
      `Height: ${height} cm\n` +
      `Exercise Level: ${exerciseLevel}\n` +
      `Goal: ${goal}`;

    if (image) {
      const tgFormData = new FormData();
      tgFormData.append("chat_id", tgChatId);
      tgFormData.append("caption", caption);
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
          text: caption,
        }),
      });
    }

    if (receipt) {
      const receiptFormData = new FormData();
      receiptFormData.append("chat_id", tgChatId);
      receiptFormData.append("caption", "Payment receipt");
      receiptFormData.append("document", receipt);
      await fetch(`https://api.telegram.org/bot${tgToken}/sendDocument`, {
        method: "POST",
        body: receiptFormData,
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