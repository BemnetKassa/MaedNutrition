import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const image = formData.get("image") as File;
    const goal = (formData.get("goal") || "General fitness") as string;
    const timeframe = (formData.get("timeframe") || "12 weeks") as string;
    const notes = (formData.get("notes") || "") as string;

    if (!image) {
      return NextResponse.json(
        { error: "Image is required" },
        { status: 400 }
      );
    }

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const prompt = `
Create a realistic visual transformation preview based on the provided photo.

Guidelines:
- Keep identity, background, lighting, and pose consistent.
- Show plausible 12-week progress aligned with the goal.
- No extreme or unrealistic changes.
- No medical claims.

Goal: ${goal}
Timeframe: ${timeframe}
Notes: ${notes}
`;

    const interaction = await ai.interactions.create({
      model: "gemini-3-pro-image-preview",
      input: [
        { type: "text", text: prompt },
        {
          type: "image",
          data: buffer.toString("base64"),
          mime_type: image.type || "image/jpeg",
        },
      ],
      response_modalities: ["image"],
      stream: false,
    });

    const imageOutput = interaction.output_image;

    if (!imageOutput?.data) {
      return NextResponse.json(
        { error: "AI did not return an image" },
        { status: 502 }
      );
    }

    return NextResponse.json({
      imageBase64: imageOutput.data,
      mimeType: imageOutput.mime_type || "image/png",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to analyze image" },
      { status: 500 }
    );
  }
}