"use client";

import { useEffect, useMemo, useState } from "react";
import { Navbar } from "../components/Navbar";

type ResultState = {
	imageDataUrl: string;
	mimeType: string;
} | null;

export default function TransformationAiPage() {
	const [file, setFile] = useState<File | null>(null);
	const [previewUrl, setPreviewUrl] = useState<string | null>(null);
	const [goal, setGoal] = useState("Lean & toned");
	const timeframe = "12 weeks";
	const [notes, setNotes] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [result, setResult] = useState<ResultState>(null);

	useEffect(() => {
		if (!file) {
			setPreviewUrl(null);
			return;
		}

		const url = URL.createObjectURL(file);
		setPreviewUrl(url);

		return () => URL.revokeObjectURL(url);
	}, [file]);

	const resultLabel = useMemo(() => {
		return result ? "Transformation Preview" : "AI Preview";
	}, [result]);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selected = event.target.files?.[0];

		if (!selected) {
			setFile(null);
			setError(null);
			return;
		}

		if (!selected.type.startsWith("image/")) {
			setError("Please upload a valid image file.");
			setFile(null);
			return;
		}

		if (selected.size > 8 * 1024 * 1024) {
			setError("Image must be under 8MB.");
			setFile(null);
			return;
		}

		setError(null);
		setFile(selected);
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!file) {
			setError("Upload a photo to generate your preview.");
			return;
		}

		setLoading(true);
		setError(null);
		setResult(null);

		try {
			const formData = new FormData();
			formData.append("image", file);
			formData.append("goal", goal);
			formData.append("timeframe", timeframe);
			formData.append("notes", notes);

			const response = await fetch("/api/analize", {
				method: "POST",
				body: formData,
			});

			const payload = (await response.json()) as {
				imageBase64?: string;
				mimeType?: string;
				error?: string;
			};

			if (!response.ok || !payload.imageBase64) {
				throw new Error(payload.error || "Failed to generate preview.");
			}

			const mimeType = payload.mimeType || "image/png";
			setResult({
				imageDataUrl: `data:${mimeType};base64,${payload.imageBase64}`,
				mimeType,
			});
		} catch (err) {
			setError(err instanceof Error ? err.message : "Something went wrong.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Navbar />
			<main className="relative overflow-hidden bg-[#F7F8F9] pt-28 text-[#111111]">
				<div className="pointer-events-none absolute inset-0">
					<div className="absolute -top-32 right-0 h-72 w-72 bg-green-200/25 blur-3xl" />
					<div className="absolute -bottom-32 left-0 h-72 w-72 bg-emerald-200/20 blur-3xl" />
					<div
						className="absolute inset-0 opacity-40"
						style={{
							backgroundImage:
								"linear-gradient(90deg, rgba(17, 24, 39, 0.05) 1px, transparent 1px), linear-gradient(0deg, rgba(17, 24, 39, 0.04) 1px, transparent 1px)",
							backgroundSize: "64px 64px",
						}}
					/>
				</div>
				<section className="relative mx-auto max-w-6xl px-4 pb-24 md:px-6">
					<div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
						<div>
							<div className="inline-flex items-center gap-2 rounded-md border border-green-200 bg-white/80 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-green-700 shadow-sm">
								AI TRANSFORMATION PREVIEW
							</div>
							<h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
								See your 12-week potential
							</h1>
							<p className="mt-4 max-w-xl text-base leading-relaxed text-[#5B6472]">
								Upload a clear front-facing photo. We will generate a realistic
								preview of what your progress can look like with consistent
								nutrition and training.
							</p>

							<div className="mt-6 grid gap-4 sm:grid-cols-3">
								<div className="border border-[#E5E7EB] bg-white/80 p-4 shadow-sm">
									<p className="text-xs font-semibold text-[#6B7280]">Plan length</p>
									<p className="mt-2 text-lg font-semibold">12 weeks</p>
								</div>
								<div className="border border-[#E5E7EB] bg-white/80 p-4 shadow-sm">
									<p className="text-xs font-semibold text-[#6B7280]">Photo type</p>
									<p className="mt-2 text-lg font-semibold">Front-facing</p>
								</div>
								<div className="border border-[#E5E7EB] bg-white/80 p-4 shadow-sm">
									<p className="text-xs font-semibold text-[#6B7280]">Output</p>
									<p className="mt-2 text-lg font-semibold">AI preview</p>
								</div>
							</div>

							<form onSubmit={handleSubmit} className="mt-8 space-y-5 border border-[#E5E7EB] bg-white/90 p-6 shadow-lg">
								<div className="grid gap-4 sm:grid-cols-2">
									<label className="flex flex-col gap-2 text-sm font-semibold text-[#111111]">
										Goal
										<select
											value={goal}
											onChange={(event) => setGoal(event.target.value)}
											className="h-11 border border-[#E5E7EB] bg-white px-3 text-sm"
										>
											<option>Lean & toned</option>
											<option>Fat loss</option>
											<option>Muscle definition</option>
											<option>Balanced recomposition</option>
										</select>
									</label>
									<div className="text-sm font-semibold text-[#111111]">
										Timeframe
										<p className="mt-2 flex h-11 items-center border border-[#E5E7EB] bg-[#F9FAFB] px-3 text-sm">
											12 weeks
										</p>
									</div>
								</div>

								<label className="flex flex-col gap-2 text-sm font-semibold text-[#111111]">
									Notes (optional)
									<input
										value={notes}
										onChange={(event) => setNotes(event.target.value)}
										placeholder="e.g. Focus on waist, posture, or energy"
										className="h-11 border border-[#E5E7EB] bg-white px-3 text-sm"
									/>
								</label>

								<label className="flex flex-col gap-2 text-sm font-semibold text-[#111111]">
									Upload photo
									<div className="border border-dashed border-[#CBD5F5] bg-[#F8FAFF] px-3 py-4 text-sm">
										<input
											type="file"
											accept="image/*"
											onChange={handleFileChange}
											className="w-full text-sm"
										/>
										<p className="mt-2 text-xs text-[#6B7280]">
											Best results: good lighting, neutral background.
										</p>
									</div>
								</label>

								{error && (
									<div className="border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
										{error}
									</div>
								)}

								<button
									type="submit"
									disabled={loading}
									className="h-12 w-full bg-[#3FAE49] text-sm font-semibold text-white transition hover:bg-[#36963f] disabled:opacity-70"
								>
									{loading ? "Generating preview..." : "Generate AI Preview"}
								</button>

								<p className="text-xs text-[#6B7280]">
									Your photo is used only to create this preview. Results are
									simulated and may vary.
								</p>
							</form>
						</div>

						<div className="space-y-6">
							<div className="border border-[#E5E7EB] bg-white p-4 shadow-sm">
								<p className="text-xs font-semibold text-[#6B7280]">Original</p>
								<div className="mt-3 flex h-64 items-center justify-center bg-[#F3F4F6]">
									{previewUrl ? (
										<img
											src={previewUrl}
											alt="Uploaded preview"
											className="h-full w-full object-contain"
										/>
									) : (
										<span className="text-sm text-[#9CA3AF]">
											Upload a photo to preview
										</span>
									)}
								</div>
							</div>

							<div className="border border-[#E5E7EB] bg-white p-4 shadow-sm">
								<div className="flex items-center justify-between">
									<p className="text-xs font-semibold text-[#6B7280]">
										{resultLabel}
									</p>
									{result && (
										<a
											href={result.imageDataUrl}
											download="transformation-preview.png"
											className="text-xs font-semibold text-green-700"
										>
											Download
										</a>
									)}
								</div>
								<div className="mt-3 flex h-64 items-center justify-center bg-[#F3F4F6]">
									{result ? (
										<img
											src={result.imageDataUrl}
											alt="AI transformation preview"
											className="h-full w-full object-contain"
										/>
									) : (
										<span className="text-sm text-[#9CA3AF]">
											Preview will appear here
										</span>
									)}
								</div>
							</div>
							<div className="border border-[#E5E7EB] bg-white p-4 shadow-sm">
								<p className="text-xs font-semibold text-[#6B7280]">Tips for best results</p>
								<ul className="mt-3 space-y-2 text-sm text-[#5B6472]">
									<li>Use a well-lit, front-facing photo.</li>
									<li>Keep a neutral background and relaxed posture.</li>
									<li>Wear fitted clothing for accurate proportions.</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
