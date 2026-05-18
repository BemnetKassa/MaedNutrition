import Link from "next/link";
import Image from "next/image";
import {
	ArrowRight,
	ChefHat,
	Clock3,
	HeartPulse,
	Leaf,
	Sparkles,
	Truck,
	UtensilsCrossed,
} from "lucide-react";
import { Navbar } from "../components/Navbar";

const meals = [
	{
		title: "Weight Loss",
		description:
			"Balanced meals with lean protein, high fiber, and calorie-aware portions.",
		image: "/pictures/meal-breakdown.avif",
	},
	{
		title: "Muscle Gain",
		description:
			"Higher protein meals designed to support recovery, strength, and performance.",
		image: "/pictures/portion-guide.png",
	},
	{
		title: "Clean Eating",
		description:
			"Simple, fresh ingredients with no unnecessary extras and lots of flavor.",
		image: "/pictures/nutrition-info.png",
	},
];

const perks = [
	{
		icon: Sparkles,
		title: "Made for real goals",
		description: "Pick a plan that aligns with your body, schedule, and routine.",
	},
	{
		icon: ChefHat,
		title: "Chef-prepared",
		description: "Meals are crafted to feel premium, not like a compromise.",
	},
	{
		icon: Truck,
		title: "Delivered fresh",
		description: "Convenient delivery keeps healthy eating easy to sustain.",
	},
];

const steps = [
	{
		number: "01",
		title: "Choose your goal",
		description:
			"Select a meal style that matches your lifestyle, whether you want to cut, maintain, or build.",
	},
	{
		number: "02",
		title: "Select your meals",
		description:
			"Browse curated options with clean ingredients and a clear nutrition breakdown.",
	},
	{
		number: "03",
		title: "Get it delivered",
		description:
			"Your meals arrive ready to fit into your week with minimal effort.",
	},
];

export default function OurMealsPage() {
	return (
		<>
			<Navbar />
			<main className="bg-[#FAFAFA] pt-28 text-[#111111]">
				<section className="relative overflow-hidden pb-16">
					  <div className="absolute inset-x-0 top-0 z-0 h-72 bg-[radial-gradient(circle_at_top_left,rgba(63,174,73,0.18),transparent_45%),radial-gradient(circle_at_top_right,rgba(27,94,32,0.12),transparent_35%)]" />

					  <div className="relative mx-auto grid max-w-362.5 gap-12 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
						<div className="max-w-2xl">
							<span className="inline-flex items-center gap-2 rounded-full bg-[#EAF7EC] px-4 py-2 text-sm font-semibold text-[#3FAE49]">
								<Leaf className="h-4 w-4" />
								Our Meals
							</span>

							<h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
								Meals that look clean,
								<br />
								feel premium, and fit your goals.
							</h1>

							<p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6B7280]">
								Explore a meal lineup built with the same modern, fresh, and
								green-forward aesthetic as the landing page. Every option is
								designed around simple ingredients and a clear nutrition story.
							</p>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row">
								<Link
									href="/assessment"
									className="inline-flex items-center justify-center rounded-xl bg-[#3FAE49] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#36963f]"
								>
									Start Assessment
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>

								<Link
									href="/mealPlan"
									className="inline-flex items-center justify-center rounded-xl border border-[#D9D9D9] bg-white px-6 py-3.5 text-sm font-semibold text-[#111111] transition-colors hover:border-[#3FAE49] hover:text-[#3FAE49]"
								>
									View Meal Plans
								</Link>
							</div>

							<div className="mt-10 grid gap-4 sm:grid-cols-3">
								{perks.map((perk) => {
									const Icon = perk.icon;

									return (
										<div
											key={perk.title}
											className="rounded-3xl border border-[#ECECEC] bg-white p-5 shadow-sm"
										>
											<div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF7EC]">
												<Icon className="h-5 w-5 text-[#3FAE49]" />
											</div>

											<h2 className="mt-4 text-base font-bold text-[#111111]">
												{perk.title}
											</h2>
											<p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
												{perk.description}
											</p>
										</div>
									);
								})}
							</div>
						</div>

						<div className="relative">
							<div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-full bg-[#EAF7EC] blur-2xl md:block" />
							<div className="overflow-hidden rounded-[36px] border border-[#E8E8E8] bg-white p-4 shadow-[0_20px_60px_rgba(17,17,17,0.08)]">
								<div className="relative aspect-4/5 overflow-hidden rounded-4xl bg-[#F5F5F5]">
									<Image
										src="/pictures/meal-breakdown.avif"
										alt="MAED Nutrition meal preview"
										fill
										priority
										sizes="(max-width: 1024px) 100vw, 45vw"
										className="object-cover object-center"
									/>
								</div>

								<div className="mt-4 grid gap-3 sm:grid-cols-3">
									{[
										["Fresh prep", "Chef made"],
										["Fast delivery", "Always convenient"],
										["Goal-based", "Tailored portions"],
									].map(([title, subtitle]) => (
										<div
											key={title}
											className="rounded-2xl bg-[#FAFAFA] px-4 py-3 text-center"
										>
											<p className="text-sm font-bold text-[#111111]">{title}</p>
											<p className="text-xs text-[#6B7280]">{subtitle}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="bg-white py-20">
					  <div className="mx-auto max-w-362.5 px-4 md:px-6">
						<div className="max-w-2xl">
							<span className="rounded-full bg-[#EAF7EC] px-4 py-2 text-sm font-semibold text-[#3FAE49]">
								Meal Categories
							</span>
							<h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
								Pick a meal style that matches your routine.
							</h2>
							<p className="mt-5 text-lg leading-relaxed text-[#6B7280]">
								The page is built to feel like part of the same system as the
								homepage: clean cards, strong contrast, soft green accents, and
								generous spacing.
							</p>
						</div>

						<div className="mt-12 grid gap-6 md:grid-cols-3">
							{meals.map((meal) => (
								<article
									key={meal.title}
									  className="group overflow-hidden rounded-4xl border border-[#ECECEC] bg-[#FAFAFA] p-4 transition-all hover:-translate-y-1 hover:shadow-xl"
								>
									  <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-white">
										<Image
											src={meal.image}
											alt={meal.title}
											fill
											sizes="(max-width: 768px) 100vw, 33vw"
											className="object-cover transition-transform duration-500 group-hover:scale-105"
										/>
									</div>

									<div className="p-3 pb-2">
										<h3 className="text-2xl font-bold text-[#111111]">
											{meal.title}
										</h3>
										<p className="mt-3 text-[#6B7280] leading-relaxed">
											{meal.description}
										</p>

										<div className="mt-6 flex items-center justify-between gap-3 border-t border-[#E5E5E5] pt-5">
											<span className="inline-flex items-center gap-2 text-sm font-semibold text-[#3FAE49]">
												<Clock3 className="h-4 w-4" />
												Ready in minutes
											</span>

											<Link
												href="/assessment"
												className="inline-flex items-center gap-2 rounded-xl bg-[#3FAE49] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#36963f]"
											>
												Choose
												<ArrowRight className="h-4 w-4" />
											</Link>
										</div>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>

				<section className="bg-[#FAFAFA] py-20">
					  <div className="mx-auto max-w-362.5 px-4 md:px-6">
						<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
							<div>
								<span className="rounded-full bg-[#EAF7EC] px-4 py-2 text-sm font-semibold text-[#3FAE49]">
									Why MAED
								</span>

								<h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
									Simple meals. Clear labels. Better consistency.
								</h2>

								<p className="mt-5 text-lg leading-relaxed text-[#6B7280]">
									The goal is to make healthy eating feel easy, visual, and
									repeatable without losing the polished feel of the site.
								</p>

								<div className="mt-8 space-y-4">
									{[
										"Nutrition-first planning with balanced macros",
										"Fresh ingredients and chef-driven preparation",
										"Flexible choices for different goals and lifestyles",
									].map((item) => (
										<div
											key={item}
											className="flex items-start gap-3 rounded-2xl border border-[#ECECEC] bg-white p-4"
										>
											<div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF7EC]">
												<UtensilsCrossed className="h-4 w-4 text-[#3FAE49]" />
											</div>
											<p className="font-medium text-[#111111]">{item}</p>
										</div>
									))}
								</div>
							</div>

							<div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
								{steps.map((step) => (
									<div
										key={step.number}
										className="rounded-[28px] border border-[#E8E8E8] bg-white p-6 shadow-sm"
									>
										<div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF7EC] text-sm font-bold text-[#3FAE49]">
											{step.number}
										</div>
										<h3 className="mt-5 text-xl font-bold text-[#111111]">
											{step.title}
										</h3>
										<p className="mt-3 leading-relaxed text-[#6B7280]">
											{step.description}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				<section className="border-t border-[#E8E8E8] bg-white py-16">
					  <div className="mx-auto max-w-362.5 px-4 md:px-6">
						<div className="rounded-[36px] bg-[#111111] px-6 py-10 text-white md:px-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
							<div className="max-w-2xl">
								<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A8D9AE]">
									Next step
								</p>
								<h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
									Ready to choose meals that actually fit your plan?
								</h2>
								<p className="mt-4 max-w-xl text-white/70 leading-relaxed">
									Start with the assessment or head straight to the meal plan
									page and keep the same clean, modern MAED experience.
								</p>
							</div>

							<div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
								<Link
									href="/assessment"
									className="inline-flex items-center justify-center rounded-xl bg-[#3FAE49] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#36963f]"
								>
									Start Assessment
								</Link>
								<Link
									href="/mealPlan"
									className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/15"
								>
									Explore Meal Plan
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
